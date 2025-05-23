import { useContext, useState } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function ClassSpecificForm() {
    const { character, setCharacter, classStats, classSkillOptions, skillToAbility } = useContext(CharacterContext);

    const classFormComponents = {
        Barbarian: BarbarianForm,
        Bard: BardForm,
        Cleric: ClericForm,
        Druid: DruidForm,
        Fighter: FighterForm,
        Monk: MonkForm,
        Paladin: PaladinForm,
        Ranger: RangerForm,
        Rogue: RogueForm,
        Sorcerer: SorcererForm,
        Warlock: WarlockForm,
        Wizard: WizardForm,
    };

    const ClassForm = classFormComponents[character.class];

    if (!ClassForm) {
        return <div>Please go back to select a class.</div>;
    }

    const numChoices = classSkillOptions[character.class]?.numChoices;
    const skillOptions = classSkillOptions[character.class]?.skillOptions;

    // Helper to get abilityMods and calculateSkills from context
    const abilityMods = character.abilityMods || {};
    const proficiencyBonus = character.proficiencyBonus || 2;

    const calculateSkills = (abilityMods, skillProfs = [], proficiencyBonus = 2) => {
        const skillMods = {};
        for (const [skill, ability] of Object.entries(skillToAbility)) {
        if (skillProfs.includes(skill)) {
            skillMods[skill] = abilityMods[ability] + proficiencyBonus;
        } else {
            skillMods[skill] = abilityMods[ability];
        }
        }
        return skillMods;
    };

  return (
    <div className="form-section p-2 pb-3">
      <h2 className="text-center">{character.class} Class:</h2>
      <p className="description text-center fst-italic">
        {classStats[character.class]?.description}
      </p>
      <label>Skill Proficiencies</label>
      <div className="row">
      <div className="col-6">
        <p>The <strong>{character.class}</strong> class grants proficiency in <span className="big-number">{numChoices}</span> skills. Select from the following options:</p>
      </div>
      <div className="col-6 skill-options">
          {skillOptions && skillOptions.map((option, index) => {
            const selectedSkills = character.skillProfs || [];
            const checked = selectedSkills.includes(option);
            const disable =
              !checked && selectedSkills.length >= numChoices;
            return (
              <div key={index}>
                <input
                  type="checkbox"
                  className="check-input"
                  id={option}
                  name={option}
                  value={option}
                  checked={checked}
                  disabled={disable}
                  onChange={(e) => {
                    let newSkills = [...selectedSkills];
                    if (e.target.checked) {
                      newSkills.push(option);
                    } else {
                      newSkills = newSkills.filter(skill => skill !== option);
                    }
                    // Update skillProfs and skillMods together
                    setCharacter({
                      ...character,
                      skillProfs: newSkills,
                      skillMods: calculateSkills(abilityMods, newSkills, proficiencyBonus),
                    });
                  }}
                />
                <label htmlFor={option}>{option}</label>
              </div>
            );
          })}
      </div>
      </div>
      <hr/>
      <ClassForm />
    </div>
  );
}

export function BarbarianForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function BardForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function ClericForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function DruidForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function FighterForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function MonkForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function PaladinForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function RangerForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function RogueForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function SorcererForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function WarlockForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}

export function WizardForm() {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    return (
        <div>
            <p class="mark">TODO: Cantrips/Spells/Feats/etc</p>
        </div>
    );
}
