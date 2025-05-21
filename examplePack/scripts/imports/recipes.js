export const recipes = {
    //Night Vision
    "potions:golden_carrot": {
        recipeData: {
            pattern: [
                "GGG",
                "GCG",
                "GGG"
            ],
            ingredients: {
                "G": {type: "potions:gold_nugget", entry: "Potions"},
                "C": {type: "minecraft:carrot"}
            }
        }   
    },
    "potions:night_vision_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " G ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "G": {type: "potions:golden_carrot", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name: "§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Night Vision", desc: "§7Night Vision (3:00)", icon: "textures/items/potion_bottle_nightVision"},
                2: {slot:36, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                3: {slot:45, name: "Potion of Night Vision", desc: "§7Night Vision (8:00)", icon: "textures/items/potion_bottle_nightVision"},
                4: {slot:28, name: "Potion of Night Vision", desc: "§7Night Vision (any)", icon: "textures/items/potion_bottle_nightVision"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Night Vision", desc: "§7Night Vision (any)", icon: "textures/items/potion_bottle_splash_nightVision"},
                7: {slot:29, name: "Splash Potion of Night Vision", desc: "§7Night Vision (any)", icon: "textures/items/potion_bottle_splash_nightVision"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Night Vision", desc: "§7Night Vision (any)", icon: "textures/items/potion_bottle_lingering_nightVision"},
                10: {slot:30, name: "any Potion of Night Vision", desc: "§7Night Vision (any)", icon: "textures/items/potion_bottle_nightVision"},
                11: {slot:39, type: "potions:fermented_spider_eye", entry: "Potions", desc: "§c> Corrupt"},
                12: {slot:48, name: "any Potion of Invisibility", desc: "§7Invisibility (any)", type: "potions:invisibility_potion", entry: "Potions"},
            }
        }
    },
    //Invisibility
    "potions:invisibility_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " F ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "F": {type: "potions:fermented_spider_eye", entry: "Potions"},
                "W": {type: "potions:night_vision_potion", entry: "Potions"}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Invisibility", desc: "§7Invisibility (3:00)", icon: "textures/items/potion_bottle_invisibility"},
                2: {slot:36, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                3: {slot:45, name: "Potion of Invisibility", desc: "§7Invisibility (8:00)", icon: "textures/items/potion_bottle_invisibility"},
                4: {slot:28, name: "Potion of Invisibility", desc: "§7Invisibility (any)", icon: "textures/items/potion_bottle_invisibility"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Invisibility", desc: "§7Invisibility (any)", icon: "textures/items/potion_bottle_splash_invisibility"},
                7: {slot:29, name: "Splash Potion of Invisibility", desc: "§7Invisibility (any)", icon: "textures/items/potion_bottle_splash_invisibility"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Invisibility", desc: "§7Invisibility (any)", icon: "textures/items/potion_bottle_lingering_invisibility"}
            }
        }
    },
    //Leaping
    "potions:rabbit_foot": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_rabbit", name: "Rabbit", desc:"§7> Drop"}
            }
        }
    },
    "potions:leaping_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " R ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "R": {type: "potions:rabbit_foot", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Leaping", desc: "§7Jump Boost (3:00)", icon: "textures/items/potion_bottle_jump"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Leaping", desc: "§7Jump Boost II (1:30)", icon: "textures/items/potion_bottle_jump"},
                4: {slot:28, name: "Potion of Leaping", desc: "§7Jump Boost (3:00)", icon: "textures/items/potion_bottle_jump"},
                5: {slot:37, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                6: {slot:46, name: "Potion of Leaping", desc: "§7Jump Boost (8:00)", icon: "textures/items/potion_bottle_jump"},
                7: {slot:29, name: "Potion of Leaping", desc: "§7Jump Boost (any)", icon: "textures/items/potion_bottle_jump"},
                8: {slot:38, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                9: {slot:47, name: "Splash Potion of Leaping", desc: "§7Jump Boost (any)", icon: "textures/items/potion_bottle_splash_jump"},
                10: {slot:30, name: "Splash Potion of Leaping", desc: "§7Jump Boost (any)", icon: "textures/items/potion_bottle_splash_jump"},
                11: {slot:39, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                12: {slot:48, name: "Lingering Potion of Leaping", desc: "§7Jump Boost (any)", icon: "textures/items/potion_bottle_lingering_jump"},
                13: {slot:31, name: "any Potion of Leaping", desc: "§7Jump Boost I (any)", icon: "textures/items/potion_bottle_jump"},
                14: {slot:40, type: "potions:fermented_spider_eye", entry: "Potions", desc: "§c> Corrupt"},
                15: {slot:49, name: "any Potion of Slowness", desc: "§cSlowness I (any)", type: "potions:slowness_potion", entry: "Potions"},
            }
        }
    },
    //Fire Resistance
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
    },
    "potions:fire_resistance_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " M ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "M": {type: "potions:magma_cream", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Fire Resistance", desc: "§7Fire Resistance (3:00)", icon: "textures/items/potion_bottle_fireResistance"},
                2: {slot:36, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                3: {slot:45, name: "Potion of Fire Resistance", desc: "§7Fire Resistance (8:00)", icon: "textures/items/potion_bottle_fireResistance"},
                4: {slot:28, name: "Potion of Fire Resistance", desc: "§7Fire Resistance (any)", icon: "textures/items/potion_bottle_fireResistance"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Fire Resistance", desc: "§7Fire Resistance (any)", icon: "textures/items/potion_bottle_splash_fireResistance"},
                7: {slot:29, name: "Splash Potion of Fire Resistance", desc: "§7Fire Resistance (any)", icon: "textures/items/potion_bottle_splash_fireResistance"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Fire Resistance", desc: "§7Fire Resistance (any)", icon: "textures/items/potion_bottle_lingering_fireResistance"}
            }
        }
    },
    //Swiftness
    "potions:sugar": {
        recipeData: {
            category: "Potions",
            ingredients: {
                0: {type: "minecraft:reeds", name: "Sugar Cane"}
            }
        }
    },
    "potions:swiftness_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " S ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "S": {type: "potions:sugar", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            output: {
                label: ["§7Speed (3:00)", "", "§5When Applied:", "§9+20% Speed"]
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Swiftness", desc: "§7Speed (3:00)\n\n§5When Applied:\n§9+20% Speed", icon: "textures/items/potion_bottle_moveSpeed"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Swiftness", desc: "§7Speed II (1:30)\n\n§5When Applied:\n§9+40% Speed", icon: "textures/items/potion_bottle_moveSpeed"},
                4: {slot:28, name: "Potion of Swiftness", desc: "§7Speed (3:00)\n\n§5When Applied:\n§9+20% Speed", icon: "textures/items/potion_bottle_moveSpeed"},
                5: {slot:37, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                6: {slot:46, name: "Potion of Swiftness", desc: "§7Speed (8:00)\n\n§5When Applied:\n§9+20% Speed", icon: "textures/items/potion_bottle_moveSpeed"},
                7: {slot:29, name: "Potion of Swiftness", desc: "§7Speed (any)\n\n§5When Applied:\n§9+any% Speed", icon: "textures/items/potion_bottle_moveSpeed"},
                8: {slot:38, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                9: {slot:47, name: "Splash Potion of Swiftness", desc: "§7Speed (any)\n\n§5When Applied:\n§9+any% Speed", icon: "textures/items/potion_bottle_splash_moveSpeed"},
                10: {slot:30, name: "Splash Potion of Swiftness", desc: "§7Speed (any)\n\n§5When Applied:\n§9+any% Speed", icon: "textures/items/potion_bottle_splash_moveSpeed"},
                11: {slot:39, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                12: {slot:48, name: "Lingering Potion of Swiftness", desc: "§7Speed (any)\n\n§5When Applied:\n§9+any% Speed", icon: "textures/items/potion_bottle_lingering_moveSpeed"},
                13: {slot:31, name: "any Potion of Swiftness", desc: "§7Speed I (any)\n\n§5When Applied:\n§9+20% Speed", icon: "textures/items/potion_bottle_moveSpeed"},
                14: {slot:40, type: "potions:fermented_spider_eye", entry: "Potions", desc: "§c> Corrupt"},
                15: {slot:49, name: "any Potion of Slowness", desc: "§cSlowness I (any)\n\n§5When Applied:\n§c-15% Speed", type: "potions:slowness_potion", entry: "Potions"},
            }
        }
    },
    //Slowness
    "potions:slowness_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " F ",
                "   ",
                "SSS",
            ],
            ingredients: {
                "F": {type: "potions:fermented_spider_eye", entry: "Potions"},
                "S": {type: "potions:swiftness_potion", entry: "Potions", desc: ["§7Speed (3:00)", "", "§5When Applied:", "§9+20% Speed"]}
            },
            output: {
                label: ["§cSlowness (1:30)", "", "§5When Applied:", "§c-15% Speed"]
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Slowness", desc: "§cSlowness (1:30)\n\n§5When Applied:\n§c-15% Speed", icon: "textures/items/potion_bottle_moveSlowdown"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Slowness", desc: "§cSlowness IV (0:20)\n\n§5When Applied:\n§c-60% Speed", icon: "textures/items/potion_bottle_moveSlowdown"},
                4: {slot:28, name: "Potion of Slowness", desc: "§cSlowness (1:30)\n\n§5When Applied:\n§c-15% Speed", icon: "textures/items/potion_bottle_moveSlowdown"},
                5: {slot:37, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                6: {slot:46, name: "Potion of Slowness", desc: "§cSlowness (4:00)\n\n§5When Applied:\n§c-15% Speed", icon: "textures/items/potion_bottle_moveSlowdown"},
                7: {slot:29, name: "Potion of Slowness", desc: "§cSlowness (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_moveSlowdown"},
                8: {slot:38, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                9: {slot:47, name: "Splash Potion of Slowness", desc: "§cSlowness (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_splash_moveSlowdown"},
                10: {slot:30, name: "Splash Potion of Slowness", desc: "§cSlowness (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_splash_moveSlowdown"},
                11: {slot:39, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                12: {slot:48, name: "Lingering Potion of Slowness", desc: "§cSlowness (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_lingering_moveSlowdown"},
            },
            pageConfig: {
                1: {
                    ingredients: {
                        "F": {type: "potions:fermented_spider_eye", entry: "Potions"},
                        "S": {type: "potions:leaping_potion", entry: "Potions"}
                    }
                }
            }
        }
    },
    //Water Breathing
    "potions:water_breathing_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " P ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "P": {type: "minecraft:pufferfish", icon: "textures/items/fish_pufferfish_raw"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name: "§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Water Breathing", desc: "§7Water Breathing (3:00)", icon: "textures/items/potion_bottle_waterBreathing"},
                2: {slot:36, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                3: {slot:45, name: "Potion of Water Breathing", desc: "§7Water Breathing (8:00)", icon: "textures/items/potion_bottle_waterBreathing"},
                4: {slot:28, name: "Potion of Water Breathing", desc: "§7Water Breathing (any)", icon: "textures/items/potion_bottle_waterBreathing"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Water Breathing", desc: "§7Water Breathing (any)", icon: "textures/items/potion_bottle_splash_waterBreathing"},
                7: {slot:29, name: "Splash Potion of Water Breathing", desc: "§7Water Breathing (any)", icon: "textures/items/potion_bottle_splash_waterBreathing"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Water Breathing", desc: "§7Water Breathing (any)", icon: "textures/items/potion_bottle_lingering_waterBreathing"}
            }
        }
    },
    //Healing
    "potions:glistering_melon_slice": {
        recipeData: {
            category: "Potions",
            pattern: [
                "GGG",
                "GMG",
                "GGG"
            ],
            ingredients: {
                "G": {type: "potions:gold_nugget", entry: "Potions"},
                "M": {type: "minecraft:melon_slice", icon: "textures/items/melon"}
            }
        }
    },
    "potions:healing_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " G ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "G": {type: "potions:glistering_melon_slice", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Healing", desc: "§7Instant Health", icon: "textures/items/potion_bottle_heal"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Healing", desc: "§7Instant Health II", icon: "textures/items/potion_bottle_heal"},
                4: {slot:28, name: "Potion of Healing", desc: "§7Instant Health", icon: "textures/items/potion_bottle_heal"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Healing", desc: "§7Instant Health", icon: "textures/items/potion_bottle_splash_heal"},
                7: {slot:29, name: "Splash Potion of Healing", desc: "§7Instant Health", icon: "textures/items/potion_bottle_splash_heal"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Healing", desc: "§7Instant Health", icon: "textures/items/potion_bottle_lingering_heal"},
                10: {slot:30, name: "any Potion of Healing", desc: "§7Instant Health", icon: "textures/items/potion_bottle_heal"},
                11: {slot:39, type: "potions:fermented_spider_eye", entry: "Potions", desc: "§c> Corrupt"},
                12: {slot:48, name: "any Potion of Harming", desc: "§cInstant Damage", type: "potions:harming_potion", entry: "Potions"},
            }
        }
    },
    //Harming
    "potions:harming_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " F ",
                "   ",
                "HHH",
            ],
            ingredients: {
                "F": {type: "potions:fermented_spider_eye", entry: "Potions"},
                "H": {type: "potions:healing_potion", entry: "Potions"}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Harming", desc: "§cInstant Damage", icon: "textures/items/potion_bottle_harm"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Harming", desc: "§cInstant Damage II", icon: "textures/items/potion_bottle_harm"},
                4: {slot:28, name: "Potion of Harming", desc: "§cInstant Damage", icon: "textures/items/potion_bottle_harm"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Harming", desc: "§cInstant Damage", icon: "textures/items/potion_bottle_splash_harm"},
                7: {slot:29, name: "Splash Potion of Harming", desc: "§cInstant Damage", icon: "textures/items/potion_bottle_splash_harm"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Harming", desc: "§cInstant Damage", icon: "textures/items/potion_bottle_lingering_harm"},
            },
            pageConfig: {
                1: {
                    ingredients: {
                        "F": {type: "potions:fermented_spider_eye", entry: "Potions"},
                        "H": {type: "potions:poison_potion", entry: "Potions"}
                    }
                }
            }
        }
    },
    //Poison
    "potions:spider_eye": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_spider", name: "Spider", desc:"§7> Drop"}
            }
        }
    },
    "potions:poison_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " S ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "S": {type: "potions:spider_eye", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Poison", desc: "§cPoison (0:45)", icon: "textures/items/potion_bottle_poison"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Poison", desc: "§cPoison II (0:22)", icon: "textures/items/potion_bottle_poison"},
                4: {slot:28, name: "Potion of Poison", desc: "§cPoison (0:45)", icon: "textures/items/potion_bottle_poison"},
                5: {slot:37, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                6: {slot:46, name: "Potion of Poison", desc: "§cPoison (2:00)", icon: "textures/items/potion_bottle_poison"},
                7: {slot:29, name: "Potion of Poison", desc: "§cPoison (any)", icon: "textures/items/potion_bottle_poison"},
                8: {slot:38, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                9: {slot:47, name: "Splash Potion of Poison", desc: "§cPoison (any)", icon: "textures/items/potion_bottle_splash_poison"},
                10: {slot:30, name: "Splash Potion of Poison", desc: "§cPoison (any)", icon: "textures/items/potion_bottle_splash_poison"},
                11: {slot:39, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                12: {slot:48, name: "Lingering Potion of Poison", desc: "§cPoison (any)", icon: "textures/items/potion_bottle_lingering_poison"},
                13: {slot:31, name: "any Potion of Poison", desc: "§cPoison (0:45)", icon: "textures/items/potion_bottle_poison"},
                14: {slot:40, type: "potions:fermented_spider_eye", entry: "Potions", desc: "§c> Corrupt"},
                15: {slot:49, name: "any Potion of Harming", desc: "§cInstant Damage", type: "potions:harming_potion", entry: "Potions"},
            }
        }
    },
    //Regeneration
    "potions:ghast_tear": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_ghast", name: "Ghast", desc:"§7> Drop"}
            }
        }
    },
    "potions:regeneration_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " G ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "G": {type: "potions:ghast_tear", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Regeneration", desc: "§7Regeneration (0:45)", icon: "textures/items/potion_bottle_regeneration"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Regeneration", desc: "§7Regeneration II (0:22)", icon: "textures/items/potion_bottle_regeneration"},
                4: {slot:28, name: "Potion of Regeneration", desc: "§7Regeneration (0:45)", icon: "textures/items/potion_bottle_regeneration"},
                5: {slot:37, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                6: {slot:46, name: "Potion of Regeneration", desc: "§7Regeneration (2:00)", icon: "textures/items/potion_bottle_regeneration"},
                7: {slot:29, name: "Potion of Regeneration", desc: "§7Regeneration (any)", icon: "textures/items/potion_bottle_regeneration"},
                8: {slot:38, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                9: {slot:47, name: "Splash Potion of Regeneration", desc: "§7Regeneration (any)", icon: "textures/items/potion_bottle_splash_regeneration"},
                10: {slot:30, name: "Splash Potion of Regeneration", desc: "§7Regeneration (any)", icon: "textures/items/potion_bottle_splash_regeneration"},
                11: {slot:39, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                12: {slot:48, name: "Lingering Potion of Regeneration", desc: "§7Regeneration (any)", icon: "textures/items/potion_bottle_lingering_regeneration"}
            }
        }
    },
    //Strength
    "potions:blaze_rod": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_blaze", name: "Blaze", desc:"§7> Drop"}
            }
        }
    },
    "potions:blaze_powder": {
        recipeData: {
            category: "Potions",
            ingredients: {
                0: {type: "potions:blaze_rod", entry: "Potions"}
            },
            output: {
                amount: 2
            }
        }
    },
    "potions:strength_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " B ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "B": {type: "potions:blaze_powder", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Strength", desc: "§7Strength (3:00)\n\n§5When Applied:\n§9+1.3 Attack Damage", icon: "textures/items/potion_bottle_damageBoost"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of Strength", desc: "§7Strength II (1:30)\n\n§5When Applied:\n§9+2.99 Attack Damage", icon: "textures/items/potion_bottle_damageBoost"},
                4: {slot:28, name: "Potion of Strength", desc: "§7Strength (3:00)\n\n§5When Applied:\n§9+1.3 Attack Damage", icon: "textures/items/potion_bottle_damageBoost"},
                5: {slot:37, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                6: {slot:46, name: "Potion of Strength", desc: "§7Strength (8:00)\n\n§5When Applied:\n§9+1.3 Attack Damage", icon: "textures/items/potion_bottle_damageBoost"},
                7: {slot:29, name: "Potion of Strength", desc: "§7Strength (any)\n\n§5When Applied:\n§9+any Attack Damage", icon: "textures/items/potion_bottle_damageBoost"},
                8: {slot:38, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                9: {slot:47, name: "Splash Potion of Strength", desc: "§7Strength (any)\n\n§5When Applied:\n§9+any Attack Damage", icon: "textures/items/potion_bottle_splash_damageBoost"},
                10: {slot:30, name: "Splash Potion of Strength", desc: "§7Strength (any)\n\n§5When Applied:\n§9+any Attack Damage", icon: "textures/items/potion_bottle_splash_damageBoost"},
                11: {slot:39, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                12: {slot:48, name: "Lingering Potion of Strength", desc: "§7Strength (any)\n\n§5When Applied:\n§9+any Attack Damage", icon: "textures/items/potion_bottle_lingering_damageBoost"}
            }
        }
    },
    //Weakness
    "potions:weakness_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " F ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "F": {type: "potions:fermented_spider_eye", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Weakness", desc: "§cWeakness (1:30)\n\n§5When Applied:\n§c-0.7 Attack Damage", icon: "textures/items/potion_bottle_weakness"},
                2: {slot:36, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                3: {slot:45, name: "Potion of Weakness", desc: "§cWeakness (4:00)\n\n§5When Applied:\n§c-0.7 Attack Damage", icon: "textures/items/potion_bottle_weakness"},
                4: {slot:28, name: "Potion of Weakness", desc: "§cWeakness (any)\n\n§5When Applied:\n§c-0.7 Attack Damage", icon: "textures/items/potion_bottle_weakness"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Weakness", desc: "§cWeakness (any)\n\n§5When Applied:\n§c-0.7 Attack Damage", icon: "textures/items/potion_bottle_splash_weakness"},
                7: {slot:29, name: "Splash Potion of Weakness", desc: "§cWeakness (any)\n\n§5When Applied:\n§c-0.7 Attack Damage", icon: "textures/items/potion_bottle_splash_weakness"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Weakness", desc: "§cWeakness (any)\n\n§5When Applied:\n§c-0.7 Attack Damage", icon: "textures/items/potion_bottle_lingering_weakness"}
            }
        }
    },
    //Turtle Master
    "potions:turtle_helmet": {
        recipeData: {
            category: "Potions",
            pattern: [
                "SSS",
                "S S",
                "   "
            ],
            ingredients: {
                "S": {type: "minecraft:turtle_scute", icon: "textures/items/turtle_shell_piece"}
            }
        }
    },
    "potions:turtle_master_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " T ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "T": {type: "potions:turtle_helmet", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            output: {
                label: ["§cSlowness IV (0:20)", "§7Resistance III (0:20)", "", "§5When Applied:\n§c-60% Speed"]
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of the Turtle Master", desc: "§cSlowness IV (0:20)\n§7Resistance III (0:20)\n\n§5When Applied:\n§c-60% Speed", icon: "textures/items/potion_bottle_turtleMaster"},
                2: {slot:36, type: "potions:glowstone_dust", entry: "Potions", desc: "§6> Enhance"},
                3: {slot:45, name: "Potion of the Turtle Master", desc: "§cSlowness VI (0:20)\n§7Resistance IV (0:20)\n\n§5When Applied:\n§c-90% Speed", icon: "textures/items/potion_bottle_turtleMaster"},
                4: {slot:28, name: "Potion of the Turtle Master", desc: "§cSlowness IV (0:20)\n§7Resistance III (0:20)\n\n§5When Applied:\n§c-60% Speed", icon: "textures/items/potion_bottle_turtleMaster"},
                5: {slot:37, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                6: {slot:46, name: "Potion of the Turtle Master", desc: "§cSlowness IV (0:40)\n§7Resistance III (0:40)\n\n§5When Applied:\n§c-60% Speed", icon: "textures/items/potion_bottle_turtleMaster"},
                7: {slot:29, name: "Potion of the Turtle Master", desc: "§cSlowness (any)\n§7Resistance (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_turtleMaster"},
                8: {slot:38, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                9: {slot:47, name: "Splash Potion of the Turtle Master", desc: "§cSlowness (any)\n§7Resistance (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_splash_turtleMaster"},
                10: {slot:30, name: "Splash Potion of the Turtle Master", desc: "§cSlowness (any)\n§7Resistance (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_splash_turtleMaster"},
                11: {slot:39, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                12: {slot:48, name: "Lingering Potion of the Turtle Master", desc: "§cSlowness (any)\n§7Resistance (any)\n\n§5When Applied:\n§c-any% Speed", icon: "textures/items/potion_bottle_lingering_turtleMaster"}
            }
        }
    },
    //Slow Falling
    "potions:phantom_membrane": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_phantom", name: "Phantom", desc:"§7> Drop"}
            }
        }
    },
    "potions:slow_falling_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " M ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "M": {type: "potions:phantom_membrane", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name: "§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Slow Falling", desc: "§7Slow Falling (1:30)", icon: "textures/items/potion_bottle_slowFall"},
                2: {slot:36, type: "potions:redstone", entry: "Potions", desc: "§e> Extend"},
                3: {slot:45, name: "Potion of Slow Falling", desc: "§7Slow Falling (4:00)", icon: "textures/items/potion_bottle_slowFall"},
                4: {slot:28, name: "Potion of Slow Falling", desc: "§7Slow Falling (any)", icon: "textures/items/potion_bottle_slowFall"},
                5: {slot:37, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                6: {slot:46, name: "Splash Potion of Slow Falling", desc: "§7Slow Falling (any)", icon: "textures/items/potion_bottle_splash_slowFall"},
                7: {slot:29, name: "Splash Potion of Slow Falling", desc: "§7Slow Falling (any)", icon: "textures/items/potion_bottle_splash_slowFall"},
                8: {slot:38, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                9: {slot:47, name: "Lingering Potion of Slow Falling", desc: "§7Slow Falling (any)", icon: "textures/items/potion_bottle_lingering_slowFall"}
            }
        }
    },
    //Wind Charging
    "potions:breeze_rod": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_breeze", name: "Breeze", desc:"§7> Drop"}
            }
        }
    },
    "potions:wind_charging_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " B ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "B": {type: "potions:breeze_rod", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name: "§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Wind Charging", desc: "§cWind Charged (3:00)", icon: "textures/items/potion_bottle_windCharged"},
                2: {slot:36, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                3: {slot:45, name: "Splash Potion of Wind Charging", desc: "§cWind Charged (3:00)", icon: "textures/items/potion_bottle_splash_windCharged"},
                4: {slot:28, name: "Splash Potion of Wind Charging", desc: "§cWind Charged (3:00)", icon: "textures/items/potion_bottle_splash_windCharged"},
                5: {slot:37, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                6: {slot:46, name: "Lingering Potion of Wind Charging", desc: "§cWind Charged (0:45)", icon: "textures/items/potion_bottle_lingering_windCharged"},
            }
        }
    },
    //Weaving
    "potions:weaving_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " C ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "C": {type: "minecraft:web", block:{}, name: "Cobweb"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name: "§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Weaving", desc: "§cWeaving (3:00)", icon: "textures/items/potion_bottle_weaving"},
                2: {slot:36, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                3: {slot:45, name: "Splash Potion of Weaving", desc: "§cWeaving (3:00)", icon: "textures/items/potion_bottle_splash_weaving"},
                4: {slot:28, name: "Splash Potion of Weaving", desc: "§cWeaving (3:00)", icon: "textures/items/potion_bottle_splash_weaving"},
                5: {slot:37, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                6: {slot:46, name: "Lingering Potion of Weaving", desc: "§cWeaving (0:45)", icon: "textures/items/potion_bottle_lingering_weaving"},
            }
        }
    },
    //Oozing
    "potions:slime": {
        recipeData: {
            category: "Potions",
            pattern: [
                "SSS",
                "SSS",
                "SSS"
            ],
            ingredients: {
                "S": {type: "potions:slimeball", entry: "Potions"}
            }
        }
    },
    "potions:oozing_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " S ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "S": {type: "potions:slime", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name: "§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Oozing", desc: "§cOozing (3:00)", icon: "textures/items/potion_bottle_oozing"},
                2: {slot:36, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                3: {slot:45, name: "Splash Potion of Oozing", desc: "§cOozing (3:00)", icon: "textures/items/potion_bottle_splash_oozing"},
                4: {slot:28, name: "Splash Potion of Oozing", desc: "§cOozing (3:00)", icon: "textures/items/potion_bottle_splash_oozing"},
                5: {slot:37, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                6: {slot:46, name: "Lingering Potion of Oozing", desc: "§cOozing (0:45)", icon: "textures/items/potion_bottle_lingering_oozing"},
            }
        }
    },
    //Infestation
    "potions:stone": {
        recipeData: {
            table: "furnace",
            category: "Potions",
            ingredients: {
                0: {type: "minecraft:cobblestone", block: {}}
            }
        }
    },
    "potions:infestation_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " S ",
                "   ",
                "WWW",
            ],
            ingredients: {
                "S": {type: "potions:stone", entry: "Potions"},
                "W": {type: "potions:awkard_potion", entry: "Potions", desc: []}
            },
            inputs: {
                0: {slot:13, name: "§r", icon: "textures/items/blaze_rod"},
                1: {slot:27, name: "Potion of Infestation", desc: "§cInfested (3:00)", icon: "textures/items/potion_bottle_infested"},
                2: {slot:36, type: "potions:gunpowder", entry: "Potions", desc: "§7> Splash"},
                3: {slot:45, name: "Splash Potion of Infestation", desc: "§cInfested (3:00)", icon: "textures/items/potion_bottle_splash_infested"},
                4: {slot:28, name: "Splash Potion of Infestation", desc: "§cInfested (3:00)", icon: "textures/items/potion_bottle_splash_infested"},
                5: {slot:37, type: "potions:dragon_breath", entry: "Potions", desc: "§d> Lingering"},
                6: {slot:46, name: "Lingering Potion of Infestation", desc: "§cInfested (0:45)", icon: "textures/items/potion_bottle_lingering_infested"},
            }
        }
    },
    //Awkard Potion
    "potions:awkard_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            pattern: [
                " N ",
                "   ",
                "WWW"
            ],
            ingredients: {
                "N": {type: "minecraft:nether_wart"},
                "W": {type: "potions:water_bottle", entry: "Potions"}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"}
            }
        }
    },
    //Mundane Potion
    "potions:raw_gold": {
        recipeData: {
            table: "mineBlock",
            category: "Potions",
            ingredients: {
                0: {type: "minecraft:gold_ore", block: {}}
            },
            pageConfig: {
                1: {
                    ingredients: {
                        0: {type: "minecraft:deepslate_gold_ore", block: {}}
                    }
                }
            }
        }
    },
    "potions:gold_ingot": {
        recipeData: {
            table: "furnace",
            category: "Potions",
            ingredients: {
                0: {type: "potions:raw_gold", entry: "Potions"}
            },
            pageConfig: {
                1: {
                    table: "blastFurnace"
                }
            }
        }
    },
    "potions:gold_nugget": {
        recipeData: {
            category: "Potions",
            ingredients: {
                0: {type: "potions:gold_ingot", entry: "Potions"}
            },
            output: {
                amount: 9
            }
        }
    },
    "potions:slimeball": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_slime", name: "Slime", desc:"§7> Drop"}
            }
        }
    },
    "potions:mundane_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            double: true,
            pattern: [
                " S ",
                "   ",
                "WWW"
            ],
            ingredients: {
                "S": {type: "potions:spider_eye", entry: "Potions"},
                "W": {type: "potions:water_bottle", entry: "Potions"}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"},
                1: {slot:36, type: "potions:ghast_tear", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                2: {slot:37, type: "potions:rabbit_foot", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                3: {slot:38, type: "potions:blaze_powder", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                4: {slot:39, type: "potions:glistering_melon_slice", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                5: {slot:40, type: "potions:sugar", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                6: {slot:41, type: "potions:magma_cream", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                7: {slot:42, type: "potions:redstone", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                8: {slot:43, type: "potions:breeze_rod", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                9: {slot:44, type: "minecraft:web", block:{}, name: "Cobweb", desc: "§e> Spider Eye\n  Alternative"},
                10: {slot:45, type: "potions:slime", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"},
                11: {slot:46, type: "potions:stone", desc: "§e> Spider Eye\n  Alternative", entry: "Potions"}
            }
        }
    },
    //Thick Potion
    "potions:thick_potion": {
        recipeData: {
            table: "brewingStand",
            category: "Potions",
            pattern: [
                " G ",
                "   ",
                "WWW"
            ],
            ingredients: {
                "G": {type: "potions:glowstone_dust", entry: "Potions"},
                "W": {type: "potions:water_bottle", entry: "Potions"}
            },
            inputs: {
                0: {slot:13, name:"§r", icon: "textures/items/blaze_rod"}
            }
        }
    },
    //Water Bottle
    "potions:glass": {
        recipeData: {
            table: "furnace",
            category: "Potions",
            ingredients: {
                0: {type: "minecraft:sand", block: {}}
            }
        }
    },
    "potions:glass_bottle": {
        recipeData: {
            category: "Potions",
            pattern: [
                "  ",
                "G G",
                " G "
            ],
            ingredients: {
                "G": {type: "potions:glass", entry: "Potions"}
            },
            output: {
                amount: 3
            }
        }
    },
    "potions:water_bottle": {
        recipeData: {
            table: "cauldron",
            category: "Potions",
            ingredients: {
                0: {type: "potions:glass_bottle", entry: "Potions"}
            }
        }
    },
    //Enhance
    "potions:glowstone_dust": {
        recipeData: {
            table: "mineBlock",
            category: "Potions",
            ingredients: {
                0: {type: "minecraft:glowstone", block: {}}
            }
        }
    },
    //Extend
    "potions:redstone": {
        recipeData: {
            table: "mineBlock",
            category: "Potions",
            ingredients: {
                0: {type: "minecraft:redstone_ore", block: {}},
            },
            pageConfig: {
                1: {
                    ingredients: {
                        0: {type: "minecraft:deepslate_redstone_ore", block: {}}
                    }
                }
            }
        }
    },
    //Splash
    "potions:gunpowder": {
        recipeData: {
            table: "slayMob",
            category: "Potions",
            ingredients: {
                0: {icon: "textures/items/spawn_eggs/spawn_egg_creeper", name: "Creeper", desc: "§7> Drop"}
            }
        }
    },
    //Lingering
    "potions:dragon_breath": {
        recipeData: {
            table: "takeBreath",
            category: "Potions",
            ingredients: {
                0: {type: "potions:glass_bottle", entry: "Potions", desc: "§7> Interact"}
            }
        }
    },
    //Corrupt
    "potions:fermented_spider_eye": {
        recipeData: {
            category: "Potions",
            pattern: [
                "EM ",
                "S  ",
                "   "
            ],
            ingredients: {
                "E": {type: "potions:spider_eye", entry: "Potions"},
                "M": {type: "minecraft:brown_mushroom", icon: "textures/blocks/mushroom_brown"},
                "S": {type: "potions:sugar", entry: "Potions"}
            }
        }
    }
}
