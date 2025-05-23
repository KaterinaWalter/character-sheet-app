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
                            <div className="stat-icon"><img src="./src/assets/icons8-health-64.png" width="32px"/></div>
                            <div className="stat d-flex flex-column">
                                <span className="stat-label">Hit Points</span>
                                <span className="stat-score fw-bold">__ / {character.maxHP || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="stat-icon"><img src="./src/assets/icons8-shield-96.png" width="32px"/></div>
                            <div className="stat d-flex flex-column">
                                <span className="stat-label">Armor Class</span>
                                <span className="stat-score fw-bold">{character.armorClass || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="stat-icon"><img src="./src/assets/icons8-damage-up.png" width="32px"/></div>
                            <div className="stat d-flex flex-column">
                                <span className="stat-label">Proficiency Bonus</span>
                                <span className="stat-score fw-bold">{character.proficiencyBonus >= 0 ? "+" : ""}{character.proficiencyBonus || 0}</span>
                            </div>
                        </div>
                    </div>
                    <div className="row g-3 pb-2 text-center">
                        <div className="col-4">
                            <div className="stat-icon"><img src="./src/assets/icons8-wing-100.png" width="32px"/></div>
                            <div className="stat d-flex flex-column">
                                <span className="stat-label">Speed</span>
                                <span className="stat-score">{character.speed || 30}<span className="fw-normal"> ft.</span></span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="stat-icon"><img src="./src/assets/icons8-eye-96.png" width="32px"/></div>
                            <div className="stat d-flex flex-column">
                                <span className="stat-label">Passive Perception</span>
                                <span className="stat-score fw-bold">{character.passivePerception || 0}</span>
                            </div>
                        </div>
                        <div className="col-4">
                            <div className="stat-icon"><img src="./src/assets/icons8-critical.png" width="32px"/></div>
                            <div className="stat d-flex flex-column">
                                <span className="stat-label">Initiative</span>
                                <span className="stat-score fw-bold">{character.initiative >= 0 ? "+" : ""}{character.initiative || 0}</span>
                            </div>
                        </div>
                    </div>
                    <hr/>
                    <h3 className="fs-3 fw-bold text-center pt-1">Abilities & Skills:</h3>
                    <div className="container-fluid">
                        <div className="row">
                            <div id="STR" className="col-4 text-center d-flex flex-column ability">
                                <span className="ability-label">Strength</span>
                                <div className="">
                                    <div className="ability-score">{character.abilityScores['STR'] || 0}</div>
                                    <div className="ability-mod">{character.abilityMods['STR'] >= 0 ? "+" : ""}{character.abilityMods['STR'] || 0}</div>
                                </div>
                                <div className="text-start">
                                    <div className="skill-label pt-3">
                                        <span className={"prof-circle" + (classStats[character.class]?.savingThrows?.includes('STR') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.savingThrows['STR'] >= 0 ? "+" : ""}{character.savingThrows['STR'] || 0}</span> <strong>Saving Throw</strong>
                                    </div>
                                    <hr className="my-2 mx-0"/>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Athletics') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Athletics'] >= 0 ? "+" : ""}{character.skillMods['Athletics'] || 0}</span> Athletics
                                    </div>
                                </div>
                            </div>
                            <div id="DEX" className="col-4 text-center d-flex flex-column ability">
                                <span className="ability-label">Dexterity</span>
                                <div className="">
                                    <div className="ability-score">{character.abilityScores['DEX'] || 0}</div>
                                    <div className="ability-mod">{character.abilityMods['DEX'] >= 0 ? "+" : ""}{character.abilityMods['DEX'] || 0}</div>
                                </div>
                                <div className="text-start">
                                    <div className="skill-label pt-3">
                                        <span className={"prof-circle" + (classStats[character.class]?.savingThrows?.includes('DEX') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.savingThrows['DEX'] >= 0 ? "+" : ""}{character.savingThrows['DEX'] || 0}</span> <strong>Saving Throw</strong>
                                    </div>
                                    <hr className="my-2 mx-0"/>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Acrobatics') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Acrobatics'] >= 0 ? "+" : ""}{character.skillMods['Acrobatics'] || 0}</span> Acrobatics
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Sleight of Hand') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Sleight of Hand'] >= 0 ? "+" : ""}{character.skillMods['Sleight of Hand'] || 0}</span> Sleight of Hand
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Stealth') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Stealth'] >= 0 ? "+" : ""}{character.skillMods['Stealth'] || 0}</span> Stealth
                                    </div>
                                </div>
                            </div>
                            <div id="CON" className="col-4 text-center d-flex flex-column ability">
                                <span className="ability-label">Constitution</span>
                                <div className="">
                                    <div className="ability-score">{character.abilityScores['CON'] || 0}</div>
                                    <div className="ability-mod">{character.abilityMods['CON'] >= 0 ? "+" : ""}{character.abilityMods['CON'] || 0}</div>
                                </div>
                                <div className="text-start">
                                    <div className="skill-label pt-3">
                                        <span className={"prof-circle" + (classStats[character.class]?.savingThrows?.includes('CON') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.savingThrows['CON'] >= 0 ? "+" : ""}{character.savingThrows['CON'] || 0}</span> <strong>Saving Throw</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div id="INT" className="col-4 text-center d-flex flex-column ability">
                                <span className="ability-label">Intelligence</span>
                                <div className="">
                                    <div className="ability-score">{character.abilityScores['INT'] || 0}</div>
                                    <div className="ability-mod">{character.abilityMods['INT'] >= 0 ? "+" : ""}{character.abilityMods['INT'] || 0}</div>
                                </div>
                                <div className="text-start">
                                    <div className="skill-label pt-3">
                                        <span className={"prof-circle" + (classStats[character.class]?.savingThrows?.includes('INT') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.savingThrows['INT'] >= 0 ? "+" : ""}{character.savingThrows['INT'] || 0}</span> <strong>Saving Throw</strong>
                                    </div>
                                    <hr className="my-2 mx-0"/>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Arcana') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Arcana'] >= 0 ? "+" : ""}{character.skillMods['Arcana'] || 0}</span> Arcana
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('History') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['History'] >= 0 ? "+" : ""}{character.skillMods['History'] || 0}</span> History
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Investigation') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Investigation'] >= 0 ? "+" : ""}{character.skillMods['Investigation'] || 0}</span> Investigation
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Nature') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Nature'] >= 0 ? "+" : ""}{character.skillMods['Nature'] || 0}</span> Nature
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Religion') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Religion'] >= 0 ? "+" : ""}{character.skillMods['Religion'] || 0}</span> Religion
                                    </div>
                                </div>
                            </div>
                            <div id="WIS" className="col-4 text-center d-flex flex-column ability">
                                <span className="ability-label">Wisdom</span>
                                <div className="">
                                    <div className="ability-score">{character.abilityScores['WIS'] || 0}</div>
                                    <div className="ability-mod">{character.abilityMods['WIS'] >= 0 ? "+" : ""}{character.abilityMods['WIS'] || 0}</div>
                                </div>
                                <div className="text-start">
                                    <div className="skill-label pt-3">
                                        <span className={"prof-circle" + (classStats[character.class]?.savingThrows?.includes('WIS') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.savingThrows['WIS'] >= 0 ? "+" : ""}{character.savingThrows['WIS'] || 0}</span> <strong>Saving Throw</strong>
                                    </div>
                                    <hr className="my-2 mx-0"/>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Animal Handling') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Animal Handling'] >= 0 ? "+" : ""}{character.skillMods['Animal Handling'] || 0}</span> Animal Handling
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Insight') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Insight'] >= 0 ? "+" : ""}{character.skillMods['Insight'] || 0}</span> Insight
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Medicine') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Medicine'] >= 0 ? "+" : ""}{character.skillMods['Medicine'] || 0}</span> Medicine
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Perception') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Perception'] >= 0 ? "+" : ""}{character.skillMods['Perception'] || 0}</span> Perception
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Survival') ? " filled" : "")}/>    
                                        <span className="skill-mod">{character.skillMods['Survival'] >= 0 ? "+" : ""}{character.skillMods['Survival'] || 0}</span> Survival
                                    </div>
                                </div>
                            </div>
                            <div id="CHA" className="col-4 text-center d-flex flex-column ability">
                                <span className="ability-label">Charisma</span>
                                <div className="">
                                    <div className="ability-score">{character.abilityScores['CHA'] || 0}</div>
                                    <div className="ability-mod">{character.abilityMods['CHA'] >= 0 ? "+" : ""}{character.abilityMods['CHA'] || 0}</div>
                                </div>
                                <div className="text-start">
                                    <div className="skill-label pt-3">
                                        <span className={"prof-circle" + (classStats[character.class]?.savingThrows?.includes('CHA') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.savingThrows['CHA'] >= 0 ? "+" : ""}{character.savingThrows['CHA'] || 0}</span> <strong>Saving Throw</strong>
                                    </div>
                                    <hr className="my-2 mx-0"/>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Deception') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Deception'] >= 0 ? "+" : ""}{character.skillMods['Deception'] || 0}</span> Deception
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Intimidation') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Intimidation'] >= 0 ? "+" : ""}{character.skillMods['Intimidation'] || 0}</span> Intimidation
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Performance') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Performance'] >= 0 ? "+" : ""}{character.skillMods['Performance'] || 0}</span> Performance
                                    </div>
                                    <div className="skill-label">
                                        <span className={"prof-circle" + (character.skillProfs && character.skillProfs.includes('Persuasion') ? " filled" : "")}/>
                                        <span className="skill-mod">{character.skillMods['Persuasion'] >= 0 ? "+" : ""}{character.skillMods['Persuasion'] || 0}</span> Persuasion
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}