// === Imports ===
import { world, system } from "@minecraft/server";
import { tabs } from './imports/tabs.js';
import { tables } from './imports/tables.js';
import { entries } from './imports/entries.js';
import { recipes } from './imports/recipes.js';

// === Centralized Data Object ===
const data = { tabs, tables, entries, recipes };
const CHUNK_SIZE = 1500;

// === Chunked Data Sender ===
function sendLargeEvent(overworld, id, payload) {
    const payloadStr = JSON.stringify(payload);
    const totalChunks = Math.ceil(payloadStr.length / CHUNK_SIZE);

    for (let i = 0; i < totalChunks; i++) {
        const chunk = payloadStr.slice(i * CHUNK_SIZE, (i + 1) * CHUNK_SIZE);
        const packet = { id, index: i, total: totalChunks, chunk };
        try {
            overworld.runCommand(`scriptevent lookup:chunked_event ${JSON.stringify(packet)}`);
        } catch (err) {
            console.error(`[LookUp Exporter] Failed to send ${id} chunk ${i}`, err);
        }
    }
}

// === Export Function ===
function exportLookUpData(overworld) {
    for (const [groupKey, group] of Object.entries(data)) {
        for (const [id, wrapper] of Object.entries(group)) {
            if (wrapper?.tabData) {
                sendLargeEvent(overworld, "tab_data", { tabId: id, ...wrapper.tabData });
            } else if (wrapper?.tableData) {
                sendLargeEvent(overworld, "table_data", { tableId: id, ...wrapper.tableData });
            } else if (wrapper?.entryData) {
                sendLargeEvent(overworld, "entry_data", { entryId: id, ...wrapper.entryData });
            } else if (wrapper?.recipeData) {
                const { inputs, pageConfig, ...pureRecipe } = wrapper.recipeData;
                sendLargeEvent(overworld, "recipe_data", { typeId: id, ...pureRecipe });

                if (inputs) {
                    sendLargeEvent(overworld, "recipe_input", { typeId: id, input: inputs });
                }
                if (pageConfig) {
                    sendLargeEvent(overworld, "page_config", { typeId: id, config: pageConfig });
                }
            }
        }
    }
}

// === Respond to LookUp Ping ===
system.afterEvents.scriptEventReceive.subscribe(ev => {
    if (ev.id !== "lookup:request_data_ping") return;

    try {
        const overworld = world.getDimension("overworld");
        exportLookUpData(overworld);
        console.warn("[LookUp Exporter] Responded to data ping.");
    } catch (err) {
        console.error("[LookUp Exporter] Error during export", err);
    }
});
