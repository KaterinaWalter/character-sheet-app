import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import OriginForm from "../forms/OriginForm";
import ClassSpecificForm from "../forms/ClassSpecificForm";

export default function CharacterDetails({ onNext, onBack }) {
    const { character, setCharacter, classStats } = useContext(CharacterContext);
    console.log('CHARACTER CONTEXT:', character);
    
    return (
        <div className="container-fluid text-center m-auto">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={onBack}>← Class Selection</button>
                    <button className="btn btn-primary" onClick={onNext}>Print Sheet →</button>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div id="forms-container" className="col-md-6 text-start order-2 order-md-1">
                    <OriginForm />
                    <ClassSpecificForm />
                </div>
                <div id="character-container" className="col-md-6 text-start order-1 order-md-2 pb-3 mb-3" style={{background: `var(--${character.class.toLowerCase()}-grad)`}}>
                    <div className="row p-2 pt-4 pb-0">
                        <div className="col-10">
                            <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                                <span>{character.species || ""}</span>
                                <span> </span>
                                <span>{character.class}</span>
                            </h2>
                            <p className="fst-italic">{classStats[character.class].description}</p>
                        </div>
                        <div className="col-2 text-center p-0 pt-1">
                            <img src={`./src/assets/ClassIcon-${character.class}.svg`} alt="Class Icon" width="60px" />
                        </div>
                    </div>
                    <div className="row p-2 pb-0">
                        <div className="col-6">
                            <ul className="list-unstyled">
                            <li><strong>Name: </strong>{character.name || "None"}</li>
                            <li><strong>Alignment: </strong>{character.alignment || "None"}</li>
                            <li><strong>Armor Training: </strong>
                            <span>{character.armorProfs.length > 0 ? character.armorProfs.join(', ') : 'None'}</span>
                            </li>
                            <li><strong>Weapon Proficiencies: </strong>
                            <span>{character.weaponProfs.length > 0 ? character.weaponProfs.join(', ') : 'None'}</span>
                            </li>
                            </ul>
                        </div>
                        <div className="col-6">
                            <ul className="list-unstyled">
                            <li><strong>Species Traits: </strong>
                            <span>{character.traits.length > 0 ? character.traits.join(', ') : 'None'}</span>
                            </li>
                            {character.darkvision > 0 && (
                            <li><strong>Darkvision: </strong>{character.darkvision} ft.</li>
                            )}
                            <li><strong>Background: </strong>{character.background || "None"}</li>
                            {character.originFeat && (
                            <li><strong>Origin Feat: </strong>{character.originFeat}</li>
                            )}
                            {character.toolProf && (
                            <li><strong>Tool Proficiency: </strong>{character.toolProf}</li>
                            )}
                            </ul>
                        </div>
                    </div>
                    <div className="row g-3 pb-2 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <div className="p-1"><img src="./src/assets/icons8-health-64.png" width="32px"/></div>
                                <span className="ability-label">Hit Points</span>
                                <span className="ability-score">__ / {character.maxHP || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <div className="p-1"><img src="./src/assets/icons8-shield-96.png" width="32px"/></div>
                                <span className="ability-label">Armor Class</span>
                                <span className="ability-score">{character.armorClass || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <div className="p-1"><img src="./src/assets/icons8-damage-up.png" width="32px"/></div>
                                <span className="ability-label">Proficiency Bonus</span>
                                <span className="ability-score">{character.proficiencyBonus >= 0 ? "+" : ""}{character.proficiencyBonus || 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 pb-2 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <div className="p-1"><img src="./src/assets/icons8-wing-100.png" width="32px"/></div>
                                <span className="ability-label">Speed</span>
                                <span className="ability-score">{character.speed || 0} ft.</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <div className="p-1"><img src="./src/assets/icons8-eye-96.png" width="32px"/></div>
                                <span className="ability-label">Passive Perception</span>
                                <span className="ability-score">{character.passivePerception || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <div className="p-1"><img src="./src/assets/icons8-critical.png" width="32px"/></div>
                                <span className="ability-label">Initiative</span>
                                <span className="ability-score">{character.initiative >= 0 ? "+" : ""}{character.initiative || 0}</span>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <h3 className="fs-5 fw-bold text-center pt-1">Abilities & Skills:</h3>
                    <div className="row g-2">
                        <div className="col-2">
                            <div className="text-center d-flex flex-column ability">
                                <span className="ability-label">STR</span>
                                <span className="ability-score">{character.abilityScores['STR'] || 0}</span>
                                <span className="ability-mod">MOD: {character.abilityMods['STR'] >= 0 ? "+" : ""}{character.abilityMods['STR'] || 0}</span>
                                <span className="ability-mod">ST: {character.savingThrows['STR'] >= 0 ? "+" : ""}{character.savingThrows['STR'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-2">
                            <div className="text-center d-flex flex-column ability">
                                <span className="ability-label">DEX</span>
                                <span className="ability-score">{character.abilityScores['DEX'] || 0}</span>
                                <span className="ability-mod">MOD: {character.abilityMods['DEX'] >= 0 ? "+" : ""}{character.abilityMods['DEX'] || 0}</span>
                                <span className="ability-mod">ST: {character.savingThrows['DEX'] >= 0 ? "+" : ""}{character.savingThrows['DEX'] || 0}</span>                            </div>
                        </div>
                        <div className="col-2">
                            <div className="text-center d-flex flex-column ability">
                                <span className="ability-label">CON</span>
                                <span className="ability-score">{character.abilityScores['CON'] || 0}</span>
                                <span className="ability-mod">MOD: {character.abilityMods['CON'] >= 0 ? "+" : ""}{character.abilityMods['CON'] || 0}</span>
                                <span className="ability-mod">ST: {character.savingThrows['CON'] >= 0 ? "+" : ""}{character.savingThrows['CON'] || 0}</span>                            </div>
                        </div>
                        <div className="col-2">
                            <div className="text-center d-flex flex-column ability">
                                <span className="ability-label">INT</span>
                                <span className="ability-score">{character.abilityScores['INT'] || 0}</span>
                                <span className="ability-mod">MOD: {character.abilityMods['INT'] >= 0 ? "+" : ""}{character.abilityMods['INT'] || 0}</span>
                                <span className="ability-mod">ST: {character.savingThrows['INT'] >= 0 ? "+" : ""}{character.savingThrows['INT'] || 0}</span>                            </div>
                        </div>
                        <div className="col-2">
                            <div className="text-center d-flex flex-column ability">
                                <span className="ability-label">WIS</span>
                                <span className="ability-score">{character.abilityScores['WIS'] || 0}</span>
                                <span className="ability-mod">MOD: {character.abilityMods['WIS'] >= 0 ? "+" : ""}{character.abilityMods['WIS'] || 0}</span>
                                <span className="ability-mod">ST: {character.savingThrows['WIS'] >= 0 ? "+" : ""}{character.savingThrows['WIS'] || 0}</span>                            </div>
                        </div>
                        <div className="col-2">
                            <div className="text-center d-flex flex-column ability">
                                <span className="ability-label">CHA</span>
                                <span className="ability-score">{character.abilityScores['CHA'] || 0}</span>
                                <span className="ability-mod">MOD: {character.abilityMods['CHA'] >= 0 ? "+" : ""}{character.abilityMods['CHA'] || 0}</span>
                                <span className="ability-mod">ST: {character.savingThrows['CHA'] >= 0 ? "+" : ""}{character.savingThrows['CHA'] || 0}</span>                            </div>
                        </div>
                    </div>
                    <br/>
                    <div className="row g-2 mb-1 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">DEX</span>
                                <span className="ability-label">Acrobatics</span>
                                <span className="ability-mod">{character.skillProfs['Acrobatics'] >= 0 ? "+" : ""}{character.skillProfs['Acrobatics'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">WIS</span>
                                <span className="ability-label">Animal Handling</span>
                                <span className="ability-mod">{character.skillProfs['Animal Handling'] >= 0 ? "+" : ""}{character.skillProfs['Animal Handling'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">INT</span>
                                <span className="ability-label">Arcana</span>
                                <span className="ability-mod">{character.skillProfs['Arcana'] >= 0 ? "+" : ""}{character.skillProfs['Arcana'] || 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-1 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">STR</span>
                                <span className="ability-label">Athletics</span>
                                <span className="ability-mod">{character.skillProfs['Athletics'] >= 0 ? "+" : ""}{character.skillProfs['Athletics'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">CHA</span>
                                <span className="ability-label">Deception</span>
                                <span className="ability-mod">{character.skillProfs['Deception'] >= 0 ? "+" : ""}{character.skillProfs['Deception'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">INT</span>
                                <span className="ability-label">History</span>
                                <span className="ability-mod">{character.skillProfs['History'] >= 0 ? "+" : ""}{character.skillProfs['History'] || 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-1 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">WIS</span>
                                <span className="ability-label">Insight</span>
                                <span className="ability-mod">{character.skillProfs['Insight'] >= 0 ? "+" : ""}{character.skillProfs['Insight'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">CHA</span>
                                <span className="ability-label">Intimidation</span>
                                <span className="ability-mod">{character.skillProfs['Intimidation'] >= 0 ? "+" : ""}{character.skillProfs['Intimidation'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">INT</span>
                                <span className="ability-label">Investigation</span>
                                <span className="ability-mod">{character.skillProfs['Investigation'] >= 0 ? "+" : ""}{character.skillProfs['Investigation'] || 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-1 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">WIS</span>
                                <span className="ability-label">Medicine</span>
                                <span className="ability-mod">{character.skillProfs['Medicine'] >= 0 ? "+" : ""}{character.skillProfs['Medicine'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">INT</span>
                                <span className="ability-label">Nature</span>
                                <span className="ability-mod">{character.skillProfs['Nature'] >= 0 ? "+" : ""}{character.skillProfs['Nature'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">WIS</span>
                                <span className="ability-label">Perception</span>
                                <span className="ability-mod">{character.skillProfs['Perception'] >= 0 ? "+" : ""}{character.skillProfs['Perception'] || 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-1 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">CHA</span>
                                <span className="ability-label">Performance</span>
                                <span className="ability-mod">{character.skillProfs['Performance'] >= 0 ? "+" : ""}{character.skillProfs['Performance'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">CHA</span>
                                <span className="ability-label">Persuasion</span>
                                <span className="ability-mod">{character.skillProfs['Persuasion'] >= 0 ? "+" : ""}{character.skillProfs['Persuasion'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">INT</span>
                                <span className="ability-label">Religion</span>
                                <span className="ability-mod">{character.skillProfs['Religion'] >= 0 ? "+" : ""}{character.skillProfs['Religion'] || 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-2 mb-1 text-center">
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">DEX</span>
                                <span className="ability-label">Sleight of Hand</span>
                                <span className="ability-mod">{character.skillProfs['Sleight of Hand'] >= 0 ? "+" : ""}{character.skillProfs['Sleight of Hand'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">DEX</span>
                                <span className="ability-label">Stealth</span>
                                <span className="ability-mod">{character.skillProfs['Stealth'] >= 0 ? "+" : ""}{character.skillProfs['Stealth'] || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="ability d-flex flex-column">
                                <span className="ability-label">WIS</span>
                                <span className="ability-label">Survival</span>
                                <span className="ability-mod">{character.skillProfs['Survival'] >= 0 ? "+" : ""}{character.skillProfs['Survival'] || 0}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}