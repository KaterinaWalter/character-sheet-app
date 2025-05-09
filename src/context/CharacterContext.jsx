import React, { createContext, useState } from 'react';

// Create the context to hold data to share between components
export const CharacterContext = createContext();

// Recommended ability scores for each class
const recAbilityScores = {
  Barbarian: { STR: 15, DEX: 13, CON: 14, INT: 10, WIS: 12, CHA: 8 },
  Bard: { STR: 8, DEX: 14, CON: 12, INT: 13, WIS: 10, CHA: 15 },
  Cleric: { STR: 14, DEX: 8, CON: 13, INT: 10, WIS: 15, CHA: 12 },
  Druid: { STR: 8, DEX: 12, CON: 14, INT: 13, WIS: 15, CHA: 10 },
  Fighter: { STR: 15, DEX: 14, CON: 13, INT: 8, WIS: 10, CHA: 12 },
  Monk: { STR: 12, DEX: 15, CON: 13, INT: 10, WIS: 14, CHA: 8 },
  Paladin: { STR: 15, DEX: 10, CON: 13, INT: 8, WIS: 12, CHA: 14 },
  Ranger: { STR: 12, DEX: 15, CON: 13, INT: 8, WIS: 14, CHA: 10 },
  Rogue: { STR: 12, DEX: 15, CON: 13, INT: 14, WIS: 10, CHA: 8 },
  Sorcerer: { STR: 10, DEX: 13, CON: 14, INT: 8, WIS: 12, CHA: 15 },
  Warlock: { STR: 8, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 15 },
  Wizard: { STR: 8, DEX: 12, CON: 13, INT: 15, WIS: 14, CHA: 10 },
};

// Mapping of species to subspecies
const speciesToSubspecies = {
  Dragonborn: ['Black Dragonborn', 'Blue Dragonborn', 'Brass Dragonborn', 'Bronze Dragonborn', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Silver Dragonborn', 'White Dragonborn'],
  Elf: ['High Elf', 'Wood Elf', 'Drow'],
  Gnome: ['Forest Gnome', 'Rock Gnome'],
  Goliath: ['Cloud Giant', 'Fire Giant', 'Frost Giant', 'Hill Giant', 'Stone Giant', 'Storm Giant'],
  Tiefling: ['Abyssal Tiefling', 'Chthonic Tiefling', 'Infernal Tiefling'],
};

// Species-specific stats (speed, darkvision, extra traits?)
const speciesStats = {
  'Aasimar': { size: 'M', speed: 30, darkvision: 60, traits: ['Celestial Resistance (Necrotic, Radiant)', 'Healing Hands', 'Light Bearer (Cantrip - Light)', 'Celestial Revelation'],
    description: "Aasimar bear within their souls the light of the heavens. They are descended from humans with a touch of the power of Mount Celestia, the divine realm of many lawful good deities. Aasimar are born to serve as champions of the gods, their births hailed as blessed events. They are a people of otherworldly visages, with luminous features that reveal their celestial heritage."
   },
  'Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Black Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Acid)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Blue Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Lightning)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Brass Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Fire)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Bronze Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Lightning)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Copper Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Acid)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Gold Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Fire)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Green Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Poison)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Red Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Fire)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Silver Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Cold)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'White Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Cold)', 'Draconic Flight'],
    description: "Dragonborn look very much like dragons standing erect in humanoid form, though they lack wings or a tail. The first dragonborn had scales of vibrant hues matching the colors of their dragon kin, but generations of interbreeding have created a more uniform appearance. Their small, fine scales are usually brass or bronze in color, sometimes ranging to scarlet, rust, gold, or copper-green. They are tall and strongly built. Their hands and feet are talonlike claws with three fingers and a thumb on each hand."
   },
  'Dwarf': { size: 'M', speed: 30, darkvision: 120, traits: ['Dwarven Resilience (Poison)', 'Dwarven Toughness', 'Stonecunning (Bonus Action - Tremorsense)'],
    description: "Bold and hardy, dwarves are known as skilled warriors, miners, and workers of stone and metal. Though they stand well under 5 feet tall, dwarves are so broad and compact that they can weigh as much as a human standing nearly two feet taller. Their courage and endurance are also easily a match for any of the larger folk."
   },
  'Elf': { size: 'M', speed: 30, darkvision: 60, traits: ['Elven Lineage', 'Fey Ancestry', 'Keen Senses', 'Trance'],
    description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world."
   },
  'Drow': { size: 'M', speed: 30, darkvision: 120, traits: ['Elven Lineage (Cantrip - Dancing Lights)', 'Fey Ancestry', 'Keen Senses', 'Trance'],
    description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world."
   },
  'High Elf': { size: 'M', speed: 30, darkvision: 60, traits: ['Elven Lineage (Cantrip - Prestidigitation)', 'Fey Ancestry', 'Keen Senses', 'Trance'],
    description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world."
   },
  'Wood Elf': { size: 'M', speed: 35, darkvision: 60, traits: ['Elven Lineage (Cantrip - Druidcraft)', 'Fey Ancestry', 'Keen Senses', 'Trance'],
    description: "Elves are a magical people of otherworldly grace, living in the world but not entirely part of it. They live in places of ethereal beauty, in the midst of ancient forests or in silvery spires glittering with faerie light, where soft music drifts through the air and gentle fragrances waft on the breeze. Elves love nature and magic, art and artistry, music and poetry, and the good things of the world."
   },
  'Gnome': { size: 'S', speed: 30, darkvision: 60, traits: ['Gnomish Cunning', 'Gnomish Lineage'],
    description: "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play."
   },
  'Forest Gnome': { size: 'S', speed: 30, darkvision: 60, traits: ['Gnomish Cunning', 'Gnomish Lineage (Cantrip - Minor Illusion, Prepared Spell - Speak with Animals'],
    description: "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play."
   },
  'Rock Gnome': { size: 'S', speed: 30, darkvision: 60, traits: ['Gnomish Cunning', 'Gnomish Lineage (Cantrip - Mending, Cantrip - Prestidigitation'],
    description: "A constant hum of busy activity pervades the warrens and neighborhoods where gnomes form their close-knit communities. Louder sounds punctuate the hum: a crunch of grinding gears here, a minor explosion there, a yelp of surprise or triumph, and especially bursts of laughter. Gnomes take delight in life, enjoying every moment of invention, exploration, investigation, creation, and play."
   },
  'Goliath': { size: 'L', speed: 35, darkvision: 0, traits: ['Giant Ancestry', 'Large Form', 'Powerful Build'],
    description: "At the highest mountain peaks-far above the slopes where trees grow and where the air is thin and the frigid winds howl-dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with one. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying."
   },
  'Cloud Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Cloud's Jaunt)", 'Large Form', 'Powerful Build'],
    description: "At the highest mountain peaks-far above the slopes where trees grow and where the air is thin and the frigid winds howl-dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with one. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying."
   },
  'Fire Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Fire's Burn)", 'Large Form', 'Powerful Build'],
    description: "At the highest mountain peaks-far above the slopes where trees grow and where the air is thin and the frigid winds howl-dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with one. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying."
   },
  'Frost Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Frost's Chill)", 'Large Form', 'Powerful Build'],
    description: "At the highest mountain peaks-far above the slopes where trees grow and where the air is thin and the frigid winds howl-dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with one. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying."
   },
  'Hill Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Hill's Tumble)", 'Large Form', 'Powerful Build'],
    description: "At the highest mountain peaks-far above the slopes where trees grow and where the air is thin and the frigid winds howl-dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with one. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying."
   },
  'Stone Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Stone's Endurance)", 'Large Form', 'Powerful Build'],
    description: "At the highest mountain peaks-far above the slopes where trees grow and where the air is thin and the frigid winds howl-dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with one. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying."
   },
  'Storm Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Storm's Thunder)", 'Large Form', 'Powerful Build'],
    description: "At the highest mountain peaks-far above the slopes where trees grow and where the air is thin and the frigid winds howl-dwell the reclusive goliaths. Few folk can claim to have seen a goliath, and fewer still can claim friendship with one. Goliaths wander a bleak realm of rock, wind, and cold. Their bodies look as if they are carved from mountain stone and give them great physical power. Their spirits take after the wandering wind, making them nomads who wander from peak to peak. Their hearts are infused with the cold regard of their frigid realm, leaving each goliath with the responsibility to earn a place in the tribe or die trying."
   },
  'Halfling': { size: 'S', speed: 30, darkvision: 0, traits: ['Brave', 'Halfling Nimbleness', 'Luck', 'Naturally Stealthy'],
    description: "The comforts of home are the goals of most halflings’ lives: a place to settle in peace and quiet, far from marauding monsters and clashing armies; a blazing fire and a generous meal; fine drink and fine conversation. Though some halflings live out their days in remote agricultural communities, others form nomadic bands that travel constantly, lured by the open road and the wide horizon to discover the wonders of new lands and peoples. But even these wanderers love peace, food, hearth, and home, though home might be a wagon jostling along a dirt road or a raft floating downriver."
   },
  'Human': { size: 'M', speed: 30, darkvision: 0, traits: ['Resourceful', 'Skillful', 'Versatile'],
    description: "In the reckonings of most worlds, humans are the youngest of the common races, late to arrive on the world scene and short-lived in comparison to dwarves, elves, and dragons. Perhaps it is because of their shorter lives that they strive to achieve as much as they can in the years they are given. Or maybe they feel they have something to prove to the elder races, and that’s why they build their mighty empires on the foundation of conquest and trade. Whatever drives them, humans are the innovators, the achievers, and the pioneers of the worlds."
   },
  'Orc': { size: 'M', speed: 30, darkvision: 120, traits: ['Adrenaline Rush (Bonus Action - Dash)', 'Relentless Endurance'],
    description: "Savage and fearless, orc tribes are ever in search of elves, dwarves, and humans to destroy. Motivated by their hatred of the civilized races of the world and their need to satisfy the demands of their deities, the orcs know that if they fight well and bring glory to their tribe, Gruumsh will call them home."
   },
  'Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy', 'Otherworldly Presence'],
    description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable."
   },
  'Abyssal Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy (Damage Resistance - Poison, Cantrip - Poison Spray)', 'Otherworldly Presence (Cantrip - Thaumaturgy)'],
    description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable."
   },
  'Chthonic Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy (Damage Resistance - Necrotic, Cantrip - Chill Touch)', 'Otherworldly Presence (Cantrip - Thaumaturgy)'],
    description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable."
   },
  'Infernal Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy (Damage Resistance - Fire, Cantrip - Fire Bolt)', 'Otherworldly Presence (Cantrip - Thaumaturgy)'],
    description: "To be greeted with stares and whispers, to suffer violence and insult on the street, to see mistrust and fear in every eye: this is the lot of the tiefling. And to twist the knife, tieflings know that this is because a pact struck generations ago infused the essence of Asmodeus—overlord of the Nine Hells—into their bloodline. Their appearance and their nature are not their fault but the result of an ancient sin, for which they and their children and their children’s children will always be held accountable."
   },
};

// Each background has 3 options for ability score bonuses
const backgroundStats = {
  Acolyte: {feat: "Magic Initiate (Cleric)", toolProf: "Calligrapher's Supplies", skillProfs: ['Insight', 'Religion'], abilityBonuses: ['INT', 'WIS', 'CHA'], description: "You devoted yourself to service in a temple, either nestled in a town or secluded in a sacred grove. There you performed rites in honor of a god or pantheon. You served under a priest and studied religion. Thanks to your priest’s instruction and your own devotion, you also learned how to channel a modicum of divine power in service to your place of worship and the people who prayed there."},
  Artisan: {feat: "Crafter", toolProf: "Artisan's Tools", skillProfs: ['Investigation', 'Persuasion'], abilityBonuses: ['STR', 'DEX', 'INT'], description: "You began mopping floors and scrubbing counters in an artisan’s workshop for a few coppers per day as soon as you were strong enough to carry a bucket. When you were old enough to apprentice, you learned to create basic crafts of your own, as well as how to sweet-talk the occasional demanding customer. Your trade has also given you a keen eye for detail."},
  Charlatan: {feat: "Skilled", toolProf: "Forgery Kit", skillProfs: ['Deception', 'Sleight of Hand'], abilityBonuses: ['DEX', 'CON', 'CHA'], description: "Once you were old enough to order an ale, you soon had a favorite stool in every tavern within ten miles of where you were born. As you traveled the circuit from public house to watering hole, you learned to prey on unfortunates who were in the market for a comforting lie or two—perhaps a sham potion or forged ancestry records."},
  Criminal: {feat: "Alert", toolProf: "Thieves' Tools", skillProfs: ['Sleight of Hand', 'Stealth'], abilityBonuses: ['DEX', 'CON', 'INT'], description: "You eked out a living in dark alleyways, cutting purses or burgling shops. Perhaps you were part of a small gang of like-minded wrongdoers who looked out for each other. Or maybe you were a lone wolf, fending for yourself against the local thieves’ guild and more fearsome lawbreakers."},
  Entertainer: {feat: "Musician", toolProf: "Musical Instrument", skillProfs: ['Acrobatics', 'Performance'], abilityBonuses: ['STR', 'DEX', 'CHA'], description: "You spent much of your youth following roving fairs and carnivals, performing odd jobs for musicians and acrobats in exchange for lessons. You may have learned how to walk a tightrope, how to play a lute in a distinct style, or how to recite poetry with impeccable diction. To this day, you thrive on applause and long for the stage."},
  Farmer: {feat: "Tough", toolProf: "Carpenter's Tools", skillProfs: ['Animal Handling', 'Nature'], abilityBonuses: ['STR', 'CON', 'WIS'], description: "You grew up close to the land. Years tending animals and cultivating the earth rewarded you with patience and good health. You have a keen appreciation for nature’s bounty alongside a healthy respect for nature’s wrath."},
  Guard: {feat: "Alert", toolProf: "Gaming Set", skillProfs: ['Athletics', 'Perception'], abilityBonuses: ['STR', 'INT', 'WIS'], description: "Your feet ache when you remember the countless hours you spent at your post in the tower. You were trained to keep one eye looking outside the wall, watching for marauders sweeping from the nearby forest, and your other eye looking inside the wall, searching for cutpurses and troublemakers."},
  Guide: {feat: "Magic Initiate (Druid)", toolProf: "Cartographer's Tools", skillProfs: ['Stealth', 'Survival'], abilityBonuses: ['DEX', 'CON', 'WIS'], description: "You came of age outdoors, far from settled lands. Your home was anywhere you chose to spread your bedroll. There are wonders in the wilderness—strange monsters, pristine forests and streams, overgrown ruins of great halls once trod by giants—and you learned to fend for yourself as you explored them. From time to time, you guided friendly nature priests who instructed you in the fundamentals of channeling the magic of the wild."},
  Hermit: {feat: "Healer", toolProf: "Herbalism Kit", skillProfs: ['Medicine', 'Religion'], abilityBonuses: ['CON', 'WIS', 'CHA'], description: "You spent your early years secluded in a hut or monastery located well beyond the outskirts of the nearest settlement. In those days, your only companions were the creatures of the forest and those who would occasionally visit to bring news of the outside world and supplies. The solitude allowed you to spend many hours pondering the mysteries of creation."},
  Merchant: {feat: "Lucky", toolProf: "Navigator's Tools", skillProfs: ['Animal Handling', 'Persuasion'], abilityBonuses: ['CON', 'INT', 'CHA'], description: "You were apprenticed to a trader, caravan master, or shopkeeper, learning the fundamentals of commerce. You traveled broadly, and you earned a living by buying and selling the raw materials artisans need to practice their craft or finished works from such crafters. You might have transported goods from one place to another (by ship, wagon, or caravan) or bought them from traveling traders and sold them in your own shop."},
  Noble: {feat: "Skilled", toolProf: "Gaming Set", skillProfs: ['History', 'Persuasion'], abilityBonuses: ['STR', 'INT', 'CHA'], description: "You were raised in a castle, surrounded by wealth, power, and privilege. Your family of minor aristocrats ensured that you received a first-class education, some of which you appreciated and some of which you resented. Your time in the castle, especially the many hours you spent observing your family at court, also taught you a great deal about leadership."},
  Sage: {feat: "Magic Initiate (Wizard)", toolProf: "Calligrapher's Supplies", skillProfs: ['Arcana', 'History'], abilityBonuses: ['CON', 'INT', 'WIS'], description: "You spent your formative years traveling between manors and monasteries, performing various odd jobs and services in exchange for access to their libraries. You whiled away many a long evening studying books and scrolls, learning the lore of the multiverse—even the rudiments of magic—and your mind yearns for more."},
  Sailor: {feat: "Tavern Brawler", toolProf: "Navigator's Tools", skillProfs: ['Acrobatics', 'Perception'], abilityBonuses: ['STR', 'DEX', 'WIS'], description: "You lived as a seafarer, wind at your back and decks swaying beneath your feet. You’ve perched on barstools in more ports of call than you can remember, faced mighty storms, and swapped stories with folk who live beneath the waves."},
  Scribe: {feat: "Skilled", toolProf: "Calligrapher's Supplies", skillProfs: ['Investigation', 'Perception'], abilityBonuses: ['DEX', 'INT', 'WIS'], description: "You spent formative years in a scriptorium, a monastery dedicated to the preservation of knowledge, or a government agency, where you learned to write with a clear hand and produce finely written texts. Perhaps you scribed government documents or copied tomes of literature. You might have some skill as a writer of poetry, narrative, or scholarly research. Above all, you have a careful attention to detail, helping you avoid introducing mistakes to the documents you copy and create."},
  Soldier: {feat: "Savage Attacker", toolProf: "Gaming Set", skillProfs: ['Athletics', 'Intimidation'], abilityBonuses: ['STR', 'DEX', 'CON'], description: "You began training for war as soon as you reached adulthood and carry precious few memories of life before you took up arms. Battle is in your blood. Sometimes you catch yourself reflexively performing the basic fighting exercises you learned first. Eventually, you put that training to use on the battlefield, protecting the realm by waging war."},
  Wayfarer: {feat: "Lucky", toolProf: "Thieves' Tools", skillProfs: ['Insight', 'Stealth'], abilityBonuses: ['DEX', 'WIS', 'CHA'], description: "You grew up on the streets surrounded by similarly ill-fated castoffs, a few of them friends and a few of them rivals. You slept where you could and did odd jobs for food. At times, when the hunger became unbearable, you resorted to theft. Still, you never lost your pride and never abandoned hope. Fate is not yet finished with you."},
}

// Create the provider component to wrap the app
export const CharacterProvider = ({ children }) => {

  // State to hold character details
  const [character, setCharacter] = useState({
    class: '',
    species: '',
    background: '',
    traits: [],
    armorClass: 0,
    maxHP: 0,
    size: '',
    speed: 0,
    darkvision: 0,
    abilityScores: {'STR': 0, 'DEX': 0, 'CON': 0, 'INT': 0, 'WIS': 0, 'CHA': 0 },
    abilityMods: {'STR': 0, 'DEX': 0, 'CON': 0, 'INT': 0, 'WIS': 0, 'CHA': 0 },
  });

  // Helper function to calculate ability modifiers
  const calculateAbilityMods = (abilityScores) => {
    const mods = {};
    for (const [key, score] of Object.entries(abilityScores)) {
      if (score < 10) {
        mods[key] = Math.ceil((score - 10) / 2);
      } else if (score > 20) {
        mods[key] = Math.floor((score - 10) / 2);
      } else {
        mods[key] = Math.floor((score - 10) / 2);
      }
    }
    return mods;
  };

  // Helper function to calculate maxHP 
  const calculateMaxHP = (characterClass, conModifier) => {
    const hitDie = {
      Barbarian: 12,
      Bard: 8,
      Cleric: 8,
      Druid: 8,
      Fighter: 10,
      Monk: 8,
      Paladin: 10,
      Ranger: 10,
      Rogue: 8,
      Sorcerer: 6,
      Warlock: 8,
      Wizard: 6,
    };
    // Level 1 HP is equal to class hit die + CON modifier
    const level1HP = hitDie[characterClass] + conModifier;
    return level1HP;
  };

  // Function to update the character class
  const setCharacterClass = (characterClass) => {
    console.log('SETTING CHARACTER CLASS:', characterClass);
    const updatedAbilityScores = recAbilityScores[characterClass];
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      class: characterClass,
      abilityScores: updatedAbilityScores,
      abilityMods: calculateAbilityMods(updatedAbilityScores),
      maxHP: calculateMaxHP(characterClass, calculateAbilityMods(updatedAbilityScores).CON),
      armorClass: 10 + calculateAbilityMods(updatedAbilityScores).DEX, // update later
    }));
  };
  return (
    <CharacterContext.Provider value={{ character, setCharacter, setCharacterClass, speciesToSubspecies, speciesStats, backgroundStats }}>
      {children}
    </CharacterContext.Provider>
  );
};