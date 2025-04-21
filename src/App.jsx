import './App.css';                       // Site‑wide styles
import React, { useState } from 'react';  // React and its useState hook
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ClassSelection   from './components/views/ClassSelection';
import CharacterDetails from './components/views/CharacterDetails';
import PrintableSheet   from './components/views/PrintableSheet';
// Context provider that lets every screen share the same character data
import { CharacterProvider } from './context/CharacterContext';

// Manage view switching (1. class -> 2. details -> 3. results)
// The "switchboard" function that renders the current view
export default function App() {
  const [currentView, setCurrentView] = useState(1);
  const renderView = () => {
    // Component gets an onNext and/or onBack PROP
    switch (currentView) {
      case 1:
        return <ClassSelection onNext={() => setCurrentView(2)} />;
      case 2:
        return (
          <CharacterDetails 
            onNext={() => setCurrentView(3)} 
            onBack={() => setCurrentView(1)} 
          />
        );
      case 3:
        return <PrintableSheet onBack={() => setCurrentView(2)} />;
      default:
        return "renderView ERROR";
    }
  };
  // Use React Context so you don’t have to pass the character’s stats through props at every level 
  // Any component inside can say “give me the current character” or “update the character”
  return (
    <CharacterProvider>
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <main className="container-fluid">{renderView()}</main>
      <Footer />
    </div>
    </CharacterProvider>
  );
}
