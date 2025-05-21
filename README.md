
# LookUp Add-On Documentation

LookUp Framework is a powerful user interface system for Minecraft Bedrock Edition add-ons, created by NotŁolko. It enables developers to build rich, customizable in-game recipe views and information guides through a structured data-driven setup. To get started, simply include an [export script](scripts/export.js) in your pack that exports your data, and make sure both your pack and the LookUp Framework are enabled in your world, and you are good to go!
If you are interested, you can also check the example pack provided by me: [Folder structure](Potion-DLC-for-LookUp) | [File download](Potion-DLC-for-LookUp.mcaddon)

---

## 🔗 Table of Contents
- [1. Tabs](#1-tabs)
- [2. Tables](#2-tables)
- [3. Entries](#3-entries)
- [4. Recipes](#4-recipes)
- [5. Examples](#5-examples)
  - [5.1 Tab Example](#51-tab-example)
  - [5.2 Table Example](#52-table-example)
  - [5.3 Entry Example](#53-entry-example)
  - [5.4 Recipe Example](#54-recipe-example)

---

## 1. Tabs

### Definition
Tabs define how categories appear in the UI, controlling grouping, icons, and descriptions.

### Properties

| Key      | Type     | Description                                                   |
| -------- | -------- | ------------------------------------------------------------- |
| `tab`    | `string` | Optional. Tab group name. Defaults to `"Main"`.               |
| `menu`   | `string` | Name shown in menu list. Defaults to category key.            |
| `icon`   | `string` | Texture path for UI icon (e.g., `"textures/items/flint"`).    |
| `body`   | `string` | Optional. Description under category name. Default is generic.|
| `header` | `string` | Optional. Header in entry view. Default is `"Item Info"`.     |

### Example
```js
export const tabs = {
    "Progress": {
        tabData: {
            tab: "RLC",
            menu: "Progress",
            icon: "textures/items/flint",
            body: "Select an item:",
            header: "§lProgression Guide"
        }
    }
}
```
### Main Menu Preview
![Snímka obrazovky 2025-05-18 220814](https://github.com/user-attachments/assets/fe5a62de-444f-4f91-aae9-7a44a5121ad2)
## 2. Tables

### Definition
Tables define UI layouts for recipes—useful for crafting, brewing, smelting, or custom actions.

### Properties

| Key     | Type       | Description                                                                 |
| ------- | ---------- | --------------------------------------------------------------------------- |
| `name`  | `string`   | Display name at top of UI.                                                   |
| `icon`  | `string`   | Texture path or block ID (e.g., `"minecraft:stone"`).                        |
| `label` | `string[]` | Optional. Description lines under the name.                                 |

### Example
```js
export const tables = {
    "rlc:knapping": {
        tableData: {
            name: "Knappable Block",
            icon: "minecraft:stone",
            label: ["§7> Interact"]
        }
    }
}
```
### Category Menu Preview
![Snímka obrazovky 2025-05-18 220952](https://github.com/user-attachments/assets/12ac4bee-7e78-48c6-8ee0-e47ba618bce6)
## 3. Entries

### Definition
Entries define what is displayed under categories—items, blocks, mechanics, or concepts.

### Properties

| Key          | Type       | Description                                                                 |
| ------------ | ---------- | --------------------------------------------------------------------------- |
| `hidden`     | `boolean`  | Optional. Hides entry from menu if true. Default is `false`.                |
| `recipeSkip` | `boolean`  | Optional. Jumps to recipe view if true.                                     |
| `name`       | `string`   | Title in detail and recipe views.                                          |
| `desc`       | `string[]` | Optional. Paragraph lines for detail screen.                               |
| `label`      | `string`   | Optional. Short menu text. Defaults to `name`.                             |
| `page`       | `string`   | Optional. Page/tab inside category. Defaults to `"Main"`.                  |
| `category`   | `string`   | Required. Category key matching one from `tabs`.                           |
| `icon`       | `string`   | Required. Icon for menu and recipe view. Use `typeId` for hidden entries.  |
| `texture`    | `string`   | Optional. Overrides `icon` in recipe view. Supports texture paths/typeIds. |

### Example
```js
export const entries = {
    "rlc:flint": {
        entryData: {
            hidden: true,
            name: "Flint",
            category: "Progress",
            texture: "textures/items/flint"
        }
    }
}
```
### Item Menu Preview
![Snímka obrazovky 2025-05-18 221036](https://github.com/user-attachments/assets/02db58fb-c0f1-4ec1-be67-40fa7369a3c5)
## 4. Recipes

### Definition
Recipes describe how items are created or interacted with in-game.

### Properties

| Key           | Type             | Description                                                                 |
| ------------- | ---------------- | --------------------------------------------------------------------------- |
| `table`       | `string`         | Table key from `tables`. Default is `"craftingTable"`.                      |
| `category`    | `string`         | Required. Category key from `tabs`.                                         |
| `pattern`     | `string[]`       | Optional. 3x3 crafting layout.                                              |
| `ingredients` | `object`         | Ingredients mapped by pattern keys or slot numbers.                         |
| `inputs`      | `object`         | Optional. Extra visual slots (upgrade slots, output rows, etc.).           |
| `pageConfig`  | `object<number>` | Optional. Overrides for recipe variants.                                    |
| `double`      | `boolean`        | Optional. Enables large/double layout. Default is `false`.                  |

### Ingredient Format
| Subkey  | Type     | Description                                      |
| ------- | -------- | ------------------------------------------------ |
| `type`  | `string` | Optional. Item typeId.                           |
| `entry` | `string` | Optional. Click-through to entry key.           |
| `name`  | `string` | Optional. Display name in UI.                   |
| `desc`  | `string` | Optional. Tooltip or subtitle.                   |
| `icon`  | `string` | Optional. Texture path.                          |

### Inputs Format
| Key     | Type     | Description                                                            |
| ------- | -------- | ---------------------------------------------------------------------- |
| `slot`  | `number` | Grid slot index (0–26 for single, 0–53 for double).                     |
| `page`  | `number` | Optional. Page index for when it appears.                              |
| `type`  | `string` | Optional. TypeId fallback.                                              |
| `entry` | `string` | Optional. Entry link.                                                   |
| `name`  | `string` | Optional. Display name.                                                 |
| `desc`  | `string` | Optional. Tooltip.                                                      |
| `icon`  | `string` | Optional. Texture path.                                                 |

### Page Config Format
| Key        | Type             | Description                                     |
| ---------- | ---------------- | ----------------------------------------------- |
| `table`    | `string`         | Optional. Table override.                       |
| `pattern`  | `string[]`       | Optional. Crafting grid override.               |
| `ingredients` | `object`      | Optional. Ingredient override.                  |
| `inputs`   | `object<number>` | Optional. Input override.                       |
| `double`   | `boolean`        | Optional. Layout override.                      |

### Output Format
| Key     | Type       | Description                                                             |
| ------- | ---------- | ----------------------------------------------------------------------- |
| `name`  | `string`   | Optional. Output name override. Use `""` to hide.                        |
| `icon`  | `string`   | Optional. Output texture override. Use `""` to hide.                     |
| `amount`| `number`   | Optional. Display quantity. Defaults to `1`.                             |
| `label` | `string[]` | Optional. Tooltip under the name.                                        |

---
### Recipe Menu Preview
![Snímka obrazovky 2025-05-18 181017](https://github.com/user-attachments/assets/c9cef945-12bd-4e1d-a8a5-72428e623486)
## 5. Examples

### 5.1 Tab Example
```js
export const tabs = {
    "Progress": {
        tabData: {
            tab: "RLC",
            menu: "Progress",
            icon: "textures/items/flint",
            body: "Select an item:",
            header: "§lProgression Guide"
        }
    }
}
```

### 5.2 Table Example
```js
export const tables = {
    "rlc:knapping": {
        tableData: {
            name: "Knappable Block",
            icon: "minecraft:stone",
            label: ["§7> Interact"]
        }
    }
}
```

### 5.3 Entry Example
```js
export const entries = {
    "rlc:flint": {
        entryData: {
            hidden: true,
            name: "Flint",
            category: "Progress",
            texture: "textures/items/flint"
        }
    },
    "rlc:flint_shank": {
        entryData: {
            recipeSkip: true,
            name: "Flint Shank",
            desc: ["§9+3 Attack Damage\n48 Durability"],
            category: "Progress",
            texture: "textures/rlc/items/sword/flint_shank"
        }
    }
}
```

### 5.4 Recipe Example
```js
export const recipes = {
    "potions:magma_cream": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_magma_cube", name: "Magma Cube", desc:"§7> Drop"}
            },
            pageConfig: {
                1: {
                    table: "craftingTable",
                    ingredients: {
                        0: {type: "potions:blaze_powder", entry: "Potions"},
                        1: {type: "potions:slimeball", entry: "Potions"}
                    }
                }
            }
        }
    }
}
```
