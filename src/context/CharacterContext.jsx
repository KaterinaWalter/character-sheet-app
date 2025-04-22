import React, { createContext, useState } from 'react';

// Create the context to hold data to share between components
export const CharacterContext = createContext();

// Create the provider component to wrap the app
export const CharacterProvider = ({ children }) => {
  // State to hold character details
  const [character, setCharacter] = useState({
    class: '',
    species: '',
    background: '',
    alignment: '',
    proficiencies: [],
    profBonus: 0,
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
    }));
  };
  return (
    <CharacterContext.Provider value={{ character, setCharacter, setCharacterClass }}>
      {children}
    </CharacterContext.Provider>
  );
};