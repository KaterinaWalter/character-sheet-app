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
  return (
    <CharacterContext.Provider value={{ character, setCharacter }}>
      {children}
    </CharacterContext.Provider>
  );
};