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
  'Aasimar': { size: 'M', speed: 30, darkvision: 60, traits: ['Celestial Resistance (Necrotic, Radiant)', 'Healing Hands', 'Light Bearer (Cantrip - Light)', 'Celestial Revelation'] },
  'Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance', 'Draconic Flight'] },
  'Black Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Acid)', 'Draconic Flight'] },
  'Blue Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Lightning)', 'Draconic Flight'] },
  'Brass Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Fire)', 'Draconic Flight'] },
  'Bronze Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Lightning)', 'Draconic Flight'] },
  'Copper Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Acid)', 'Draconic Flight'] },
  'Gold Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Fire)', 'Draconic Flight'] },
  'Green Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Poison)', 'Draconic Flight'] },
  'Red Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Fire)', 'Draconic Flight'] },
  'Silver Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Cold)', 'Draconic Flight'] },
  'White Dragonborn': { size: 'M', speed: 30, darkvision: 60, traits: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance (Cold)', 'Draconic Flight'] },
  'Dwarf': { size: 'M', speed: 30, darkvision: 120, traits: ['Dwarven Resilience - Poison Resistance', 'Dwarven Toughness', 'Stonecunning (Bonus Action - Tremorsense)'] },
  'Elf': { size: 'M', speed: 30, darkvision: 60, traits: ['Elven Lineage', 'Fey Ancestry', 'Keen Senses', 'Trance'] },
  'Drow': { size: 'M', speed: 30, darkvision: 120, traits: ['Elven Lineage (Cantrip - Dancing Lights)', 'Fey Ancestry', 'Keen Senses', 'Trance'] },
  'High Elf': { size: 'M', speed: 30, darkvision: 60, traits: ['Elven Lineage (Cantrip - Prestidigitation)', 'Fey Ancestry', 'Keen Senses', 'Trance'] },
  'Wood Elf': { size: 'M', speed: 35, darkvision: 60, traits: ['Elven Lineage (Cantrip - Druidcraft)', 'Fey Ancestry', 'Keen Senses', 'Trance'] },
  'Gnome': { size: 'S', speed: 30, darkvision: 60, traits: ['Gnomish Cunning', 'Gnomish Lineage'] },
  'Forest Gnome': { size: 'S', speed: 30, darkvision: 60, traits: ['Gnomish Cunning', 'Gnomish Lineage (Cantrip - Minor Illusion, Prepared Spell - Speak with Animals'] },
  'Rock Gnome': { size: 'S', speed: 30, darkvision: 60, traits: ['Gnomish Cunning', 'Gnomish Lineage (Cantrip - Mending, Cantrip - Prestidigitation'] },
  'Goliath': { size: 'L', speed: 35, darkvision: 0, traits: ['Giant Ancestry', 'Large Form', 'Powerful Build'] },
  'Cloud Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Cloud's Jaunt)", 'Large Form', 'Powerful Build'] },
  'Fire Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Fire's Burn)", 'Large Form', 'Powerful Build'] },
  'Frost Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Frost's Chill)", 'Large Form', 'Powerful Build'] },
  'Hill Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Hill's Tumble)", 'Large Form', 'Powerful Build'] },
  'Stone Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Stone's Endurance)", 'Large Form', 'Powerful Build'] },
  'Storm Giant': { size: 'L', speed: 35, darkvision: 0, traits: ["Giant Ancestry (Storm's Thunder)", 'Large Form', 'Powerful Build'] },
  'Halfling': { size: 'S', speed: 30, darkvision: 0, traits: ['Brave', 'Halfling Nimbleness', 'Luck', 'Naturally Stealthy'] },
  'Human': { size: 'M', speed: 30, darkvision: 0, traits: ['Resourceful', 'Skillful', 'Versatile'] },
  'Orc': { size: 'M', speed: 30, darkvision: 120, traits: ['Adrenaline Rush (Bonus Action - Dash)', 'Relentless Endurance'] },
  'Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy', 'Otherworldly Presence'] },
  'Abyssal Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy (Damage Resistance - Poison, Cantrip - Poison Spray)', 'Otherworldly Presence (Cantrip - Thaumaturgy)'] },
  'Chthonic Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy (Damage Resistance - Necrotic, Cantrip - Chill Touch)', 'Otherworldly Presence (Cantrip - Thaumaturgy)'] },
  'Infernal Tiefling': { size: 'M', speed: 30, darkvision: 60, traits: ['Infernal Legacy (Damage Resistance - Fire, Cantrip - Fire Bolt)', 'Otherworldly Presence (Cantrip - Thaumaturgy)'] },
};

// Each background has 3 options for ability score bonuses
const backgroundStats = {
  Acolyte: {feat: "Magic Initiate (Cleric)", toolProf: "Calligrapher's Supplies", skillProfs: ['Insight', 'Religion'], abilityBonuses: ['INT', 'WIS', 'CHA']},
  Artisan: {feat: "Crafter", toolProf: "Artisan's Tools", skillProfs: ['Investigation', 'Persuasion'], abilityBonuses: ['STR', 'DEX', 'INT']},
  Charlatan: {feat: "Skilled", toolProf: "Forgery Kit", skillProfs: ['Deception', 'Sleight of Hand'], abilityBonuses: ['DEX', 'CON', 'CHA']},
  Criminal: {feat: "Alert", toolProf: "Thieves' Tools", skillProfs: ['Sleight of Hand', 'Stealth'], abilityBonuses: ['DEX', 'CON', 'INT']},
  Entertainer: {feat: "Musician", toolProf: "Musical Instrument", skillProfs: ['Acrobatics', 'Performance'], abilityBonuses: ['STR', 'DEX', 'CHA']},
  Farmer: {feat: "Tough", toolProf: "Carpenter's Tools", skillProfs: ['Animal Handling', 'Nature'], abilityBonuses: ['STR', 'CON', 'WIS']},
  Guard: {feat: "Alert", toolProf: "Gaming Set", skillProfs: ['Athletics', 'Perception'], abilityBonuses: ['STR', 'INT', 'WIS']},
  Guide: {feat: "Magic Initiate (Druid)", toolProf: "Cartographer's Tools", skillProfs: ['Stealth', 'Survival'], abilityBonuses: ['DEX', 'CON', 'WIS']},
  Hermit: {feat: "Healer", toolProf: "Herbalism Kit", skillProfs: ['Medicine', 'Religion'], abilityBonuses: ['CON', 'WIS', 'CHA']},
  Merchant: {feat: "Lucky", toolProf: "Navigator's Tools", skillProfs: ['Animal Handling', 'Persuasion'], abilityBonuses: ['CON', 'INT', 'CHA']},
  Noble: {feat: "Skilled", toolProf: "Gaming Set", skillProfs: ['History', 'Persuasion'], abilityBonuses: ['STR', 'INT', 'CHA']},
  Sage: {feat: "Magic Initiate (Wizard)", toolProf: "Calligrapher's Supplies", skillProfs: ['Arcana', 'History'], abilityBonuses: ['CON', 'INT', 'WIS']},
  Sailor: {feat: "Tavern Brawler", toolProf: "Navigator's Tools", skillProfs: ['Acrobatics', 'Perception'], abilityBonuses: ['STR', 'DEX', 'WIS']},
  Scribe: {feat: "Skilled", toolProf: "Calligrapher's Supplies", skillProfs: ['Investigation', 'Perception'], abilityBonuses: ['DEX', 'INT', 'WIS']},
  Soldier: {feat: "Savage Attacker", toolProf: "Gaming Set", skillProfs: ['Athletics', 'Intimidation'], abilityBonuses: ['STR', 'DEX', 'CON']},
  Wayfarer: {feat: "Lucky", toolProf: "Thieves' Tools", skillProfs: ['Insight', 'Stealth'], abilityBonuses: ['DEX', 'WIS', 'CHA']},
}

// Create the provider component to wrap the app
export const CharacterProvider = ({ children }) => {

  // State to hold character details
  const [character, setCharacter] = useState({
    class: '',
    species: '',
    background: '',
    alignment: '',
    traits: [],
    armorClass: 0,
    maxHP: 0,
    size: 'M',
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