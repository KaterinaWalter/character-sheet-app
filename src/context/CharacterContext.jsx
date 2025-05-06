import React, { createContext, useState } from 'react';

// Create the context to hold data to share between components
export const CharacterContext = createContext();

// Recommended ability scores for each class
const recAbilityScores = {
  Barbarian: { STR: 15, DEX: 13, CON: 14, INT: 8, WIS: 12, CHA: 10 },
  Bard: { STR: 8, DEX: 14, CON: 13, INT: 12, WIS: 10, CHA: 15 },
  Cleric: { STR: 13, DEX: 12, CON: 14, INT: 8, WIS: 15, CHA: 10 },
  Druid: { STR: 10, DEX: 13, CON: 14, INT: 12, WIS: 15, CHA: 8 },
  Fighter: { STR: 15, DEX: 13, CON: 14, INT: 8, WIS: 12, CHA: 10 },
  Monk: { STR: 12, DEX: 15, CON: 13, INT: 8, WIS: 14, CHA: 10 },
  Paladin: { STR: 15, DEX: 12, CON: 13, INT: 8, WIS: 10, CHA: 14 },
  Ranger: { STR: 12, DEX: 15, CON: 13, INT: 8, WIS: 14, CHA: 10 },
  Rogue: { STR: 8, DEX: 15, CON: 13, INT: 12, WIS: 10, CHA: 14 },
  Sorcerer: { STR: 8, DEX: 13, CON: 14, INT: 12, WIS: 10, CHA: 15 },
  Warlock: { STR: 8, DEX: 13, CON: 14, INT: 10, WIS: 12, CHA: 15 },
  Wizard: { STR: 8, DEX: 13, CON: 14, INT: 15, WIS: 12, CHA: 10 }
};

// Species-specific stats (speed, darkvision, AC?, HP?)
const speciesStats = {
  Aasimar: { speed: 30, darkvision: 60 },
  Dragonborn: { speed: 30, darkvision: 60},
  Dwarf: { speed: 30, darkvision: 120},
  Elf: { speed: 30, darkvision: 60 },
  'Drow': { speed: 30, darkvision: 120 },
  'High Elf': { speed: 30, darkvision: 60 },
  'Wood Elf': { speed: 35, darkvision: 60 },
  Gnome: { speed: 30, darkvision: 60},
  Goliath: { speed: 35, darkvision: 0},
  Halfling: { speed: 30, darkvision: 0},
  Human: { speed: 30, darkvision: 0},
  Orc: { speed: 30, darkvision: 120},
  Tiefling: { speed: 30, darkvision: 60},
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
  });
  // Function to update the character class
  const setCharacterClass = (characterClass) => {
    console.log('SETTING CHARACTER CLASS:', characterClass);
    setCharacter((prevCharacter) => ({
      ...prevCharacter,
      class: characterClass,
      abilityScores: recAbilityScores[characterClass] || prevCharacter.abilityScores,
    }));
  };
  return (
    <CharacterContext.Provider value={{ character, setCharacter, setCharacterClass }}>
      {children}
    </CharacterContext.Provider>
  );
};