import './App.css';
import React, { useState } from 'react';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import ClassSelection from './components/views/ClassSelection';
import CharacterDetails from './components/views/CharacterDetails';
import PrintableSheet from './components/views/PrintableSheet';
import { CharacterProvider } from './context/CharacterContext';

export default function App() {
  // Manage view switching (class -> details -> printable sheet)
  const [currentView, setCurrentView] = useState(1);
  const renderView = () => {
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
  // Make the character state accessible to any component
  return (
    <CharacterProvider>
    <div className="App d-flex flex-column min-vh-100">
      <Header />
      <main>{renderView()}</main>
      <Footer />
    </div>
    </CharacterProvider>
  );
}
