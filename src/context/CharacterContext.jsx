import React, { createContext, useState } from 'react';

// Create the context to hold data to share between components
export const CharacterContext = createContext();

// Create the provider component to wrap the app
export const CharacterProvider = ({ children }) => {
  // State to hold character details
  const [character, setCharacter] = useState({
    class: '',
    background: '',
    abilityScores: {},
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