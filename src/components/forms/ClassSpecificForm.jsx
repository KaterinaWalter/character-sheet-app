import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function ClassSpecificForm() {
  const { character } = useContext(CharacterContext);

  switch (character.class) {
    case 'Barbarian':
      return <BarbarianForm />;
    case 'Bard':
      return <BardForm />;
    case 'Cleric':
      return <ClericForm />;
    case 'Druid':
      return <DruidForm />;
    case 'Fighter':
      return <FighterForm />;
    case 'Monk':
      return <MonkForm />;
    case 'Paladin':
      return <PaladinForm />;
    case 'Ranger':
      return <RangerForm />;
    case 'Rogue':
      return <RogueForm />;
    case 'Sorcerer':
      return <SorcererForm />;
    case 'Warlock':
      return <WarlockForm />;
    case 'Wizard':
      return <WizardForm />;
    default:
      return <div>Please select a class.</div>;
  }
}

export function BarbarianForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Barbarian Class:</h2>
        </div>
    );
}

export function BardForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Bard Class:</h2>
        </div>
    );
}

export function ClericForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Cleric Class:</h2>
        </div>
    );
}

export function DruidForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Druid Class:</h2>
        </div>
    );
}

export function FighterForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Fighter Class:</h2>
        </div>
    );
}

export function MonkForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Monk Class:</h2>
        </div>
    );
}

export function PaladinForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Paladin Class:</h2>
        </div>
    );
}

export function RangerForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Ranger Class:</h2>
        </div>
    );
}

export function RogueForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Rogue Class:</h2>
        </div>
    );
}

export function SorcererForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Sorcerer Class:</h2>
        </div>
    );
}

export function WarlockForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Warlock Class:</h2>
        </div>
    );
}

export function WizardForm() {
    return (
        <div className="form-section p-2 pb-3">
            <h2 className="text-center">Wizard Class:</h2>
        </div>
    );
}
