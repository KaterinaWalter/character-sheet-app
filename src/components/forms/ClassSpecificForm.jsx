import { useContext, useState } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function ClassSpecificForm() {
  const { character, classStats } = useContext(CharacterContext);

  switch (character.class) {
    case 'Barbarian':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <BarbarianForm />
        </div>
      );
    case 'Bard':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <BardForm />
        </div>
      );
    case 'Cleric':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <ClericForm />
        </div>
      );
    case 'Druid':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <DruidForm />
        </div>
      );
    case 'Fighter':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <FighterForm />
        </div>
      );
    case 'Monk':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <MonkForm />
        </div>
      );
    case 'Paladin':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <PaladinForm />
        </div>
      );
    case 'Ranger':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <RangerForm />
        </div>
      );
    case 'Rogue':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <RogueForm />
        </div>
      );
    case 'Sorcerer':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <SorcererForm />
        </div>
      );
    case 'Warlock':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <WarlockForm />
        </div>
      );
    case 'Wizard':
      return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">{character.class} Class:</h2>
            <p className="description text-center fst-italic">{classStats[character.class].description}</p>
            <WizardForm />
        </div>
      );
    default:
      return (<div>Please go back to select a class.</div>);
  }
}

export function BarbarianForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>

        </div>
    );
}

export function BardForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function ClericForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function DruidForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function FighterForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function MonkForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function PaladinForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function RangerForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function RogueForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function SorcererForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function WarlockForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}

export function WizardForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            
        </div>
    );
}
