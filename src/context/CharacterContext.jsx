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

// Species-specific stats (speed, darkvision, AC?, HP?)
const speciesStats = {
  'Aasimar': { speed: 30, darkvision: 60 },
  'Dragonborn': { speed: 30, darkvision: 60},
  'Dwarf': { speed: 30, darkvision: 120},
  'Elf': { speed: 30, darkvision: 60 },
  'Drow': { speed: 30, darkvision: 120 },
  'High Elf': { speed: 30, darkvision: 60 },
  'Wood Elf': { speed: 35, darkvision: 60 },
  'Gnome': { speed: 30, darkvision: 60},
  'Goliath': { speed: 35, darkvision: 0},
  'Halfling': { speed: 30, darkvision: 0},
  'Human': { speed: 30, darkvision: 0},
  'Orc': { speed: 30, darkvision: 120},
  'Tiefling': { speed: 30, darkvision: 60},
};

// Mapping of species to subspecies
const speciesToSubspecies = {
  Dragonborn: ['Black Dragonborn', 'Blue Dragonborn', 'Brass Dragonborn', 'Bronze Dragonborn', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Silver Dragonborn', 'White Dragonborn'],
  Elf: ['High Elf', 'Wood Elf', 'Drow'],
  Gnome: ['Forest Gnome', 'Rock Gnome'],
  Goliath: ['Cloud Giant', 'Fire Giant', 'Frost Giant', 'Hill Giant', 'Stone Giant', 'Storm Giant'],
  Tiefling: ['Abyssal Tiefling', 'Chtonian Tiefling', 'Infernal Tiefling'],
};

// Mapping of species to traits
const speciesToTraits = {
  Aasimar: ['Celestial Resistance', 'Healing Hands', 'Light Bearer', 'Celestial Revelation'],
  Dragonborn: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance', 'Draconic Flight'],
  Dwarf: ['Dwarven Resilience', 'Dwarven Toughness', 'Stonecunning'],
  Elf: ['Elven Lineage', 'Fey Ancestry', 'Keen Senses', 'Trance'],
  Gnome: ['Gnomish Cunning', 'Gnomish Lineage'],
  Goliath: ['Giant Ancestry', 'Large Form', 'Powerful Build'],
  Halfling: ['Brave', 'Halfling Nimbleness', 'Luck', 'Naturally Stealthy'],
  Human: ['Resourceful', 'Skillful', 'Versatile'],
  Orc: ['Adrenaline Rush', 'Relentless Endurance'],
  Tiefling: ['Infernal Legacy', 'Otherworldly Presence'],
};

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
    speed: 0,
    darkvision: 0,
    abilityScores: {'STR': 0, 'DEX': 0, 'CON': 0, 'INT': 0, 'WIS': 0, 'CHA': 0 },
    abilityMods: {'STR': 0, 'DEX': 0, 'CON': 0, 'INT': 0, 'WIS': 0, 'CHA': 0 },
  });

  // Helper function to calculate ability modifiers
  const calculateAbilityMods = (abilityScores) => {
    const mods = {};
    for (const [key, score] of Object.entries(abilityScores)) {
      const mod = Math.floor((score - 10) / 2);
      mods[key] = mod >= 0 ? `+${mod}` : `${mod}`;
    }
    return mods;
  };

  // Helper function to calculate maxHP based on class and CON modifier
const calculateMaxHP = (characterClass, abilityMods) => {
  const conMod = parseInt(abilityMods.CON, 10) || 0; // Convert CON modifier to integer
  switch (characterClass) {
    case 'Barbarian':
      return 12 + conMod;
    case 'Fighter':
    case 'Paladin':
    case 'Ranger':
      return 10 + conMod;
    case 'Bard':
    case 'Cleric':
    case 'Druid':
    case 'Monk':
    case 'Rogue':
    case 'Warlock':
      return 8 + conMod;
    case 'Sorcerer':
    case 'Wizard':
      return 6 + conMod;
    default:
      return 0; // Default maxHP if class is not set
  }
};


  // Function to update the character class
  const setCharacterClass = (characterClass) => {
    console.log('SETTING CHARACTER CLASS:', characterClass);
    const updatedAbilityScores = recAbilityScores[characterClass] || prevCharacter.abilityScores;
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      class: characterClass,
      abilityScores: updatedAbilityScores,
      abilityMods: calculateAbilityMods(updatedAbilityScores),
    }));
  };
  return (
    <CharacterContext.Provider value={{ character, setCharacter, setCharacterClass, speciesToSubspecies, speciesToTraits, speciesStats }}>
      {children}
    </CharacterContext.Provider>
  );
};