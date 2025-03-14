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
        <div>
            <h2>Barbarian Class</h2>
        </div>
    );
}

export function BardForm() {
    return (
        <div>
            <h2>Bard Class</h2>
        </div>
    );
}

export function ClericForm() {
    return (
        <div>
            <h2>Cleric Class</h2>
        </div>
    );
}

export function DruidForm() {
    return (
        <div>
            <h2>Druid Class</h2>
        </div>
    );
}

export function FighterForm() {
    return (
        <div>
            <h2>Fighter Class</h2>
        </div>
    );
}

export function MonkForm() {
    return (
        <div>
            <h2>Monk Class</h2>
        </div>
    );
}

export function PaladinForm() {
    return (
        <div>
            <h2>Paladin Class</h2>
        </div>
    );
}

export function RangerForm() {
    return (
        <div>
            <h2>Ranger Class</h2>
        </div>
    );
}

export function RogueForm() {
    return (
        <div>
            <h2>Rogue Class</h2>
        </div>
    );
}

export function SorcererForm() {
    return (
        <div>
            <h2>Sorcerer Class</h2>
        </div>
    );
}

export function WarlockForm() {
    return (
        <div>
            <h2>Warlock Class</h2>
        </div>
    );
}

export function WizardForm() {
    return (
        <div>
            <h2>Wizard Class</h2>
        </div>
    );
}
