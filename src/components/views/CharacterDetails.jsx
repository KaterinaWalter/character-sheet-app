import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import OriginForm from "../forms/OriginForm";

export default function CharacterDetails({ onNext, onBack }) {
    const { character } = useContext(CharacterContext);
    console.log('CHARACTER CONTEXT:', character);
    return (
        <div className="container-fluid text-center m-auto">
            <div className="d-flex justify-content-between">
                <button className="btn btn-primary" onClick={onBack}>← Class Selection</button>
                <button className="btn btn-primary" onClick={onNext}>Print Sheet →</button>
            </div>
            <br></br>
            <div className="row">
                <div id="forms-container" className="col-md-6 text-start order-2 order-md-1">
                    <OriginForm />
                    <br></br>
                </div>
                <div id="character-container" className="col-md-6 text-start order-1 order-md-2 pb-3">
                    <div className="row pt-4 pb-3">
                        <div className="col-4 text-center m-auto">
                            <img src={`./src/assets/ClassIcon-${character.class}.svg`} alt="Class Icon" width="50px" />
                        </div>
                        <div className="col-8">
                            <h2 className="fw-bold" style={{ fontSize: "2.5rem" }}>
                                <span>{character.species || ""}</span>
                                <span> </span>
                                <span>{character.class}</span>
                            </h2>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-4">
                            <ul className="list-unstyled">
                            <li><strong>Armor Class: </strong>{character.armorClass || 0}</li>
                            <li><strong>Max HP: </strong>{character.maxHP || 0}</li>
                            <li><strong>Speed: </strong>{character.speed || 0} ft.</li>
                            <li><strong>Darkvision: </strong>{character.darkvision || 0} ft.</li>
                            </ul>
                        </div>
                        <div className="col-8">
                            <ul className="list-unstyled">
                            <li><strong>Background: </strong>{character.background || "None"}</li>
                            <li><strong>Alignment: </strong>{character.alignment || "None"}</li>
                            <li><strong>Traits: </strong>
                            <span>{character.traits.length > 0 ? character.traits.join(', ') : 'None'}</span>
                            </li>
                            </ul>
                        </div>
                    </div>
                    <h3 className="fs-5 fw-bold text-center">Ability Scores:</h3>
                    <div className="row">
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">STR</span>
                            <span className="ability-score">{character.abilityScores['STR'] || 0}</span>
                            <span className="ability-mod">{character.abilityMods['STR'] >= 0 ? "+" : ""}{character.abilityMods['STR'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">DEX</span>
                            <span className="ability-score">{character.abilityScores['DEX'] || 0}</span>
                            <span className="ability-mod">{character.abilityMods['DEX'] >= 0 ? "+" : ""}{character.abilityMods['DEX'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">CON</span>
                            <span className="ability-score">{character.abilityScores['CON'] || 0}</span>
                            <span className="ability-mod">{character.abilityMods['CON'] >= 0 ? "+" : ""}{character.abilityMods['CON'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">INT</span>
                            <span className="ability-score">{character.abilityScores['INT'] || 0}</span>
                            <span className="ability-mod">{character.abilityMods['INT'] >= 0 ? "+" : ""}{character.abilityMods['INT'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">WIS</span>
                            <span className="ability-score">{character.abilityScores['WIS'] || 0}</span>
                            <span className="ability-mod">{character.abilityMods['WIS'] >= 0 ? "+" : ""}{character.abilityMods['WIS'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">CHA</span>
                            <span className="ability-score">{character.abilityScores['CHA'] || 0}</span>
                            <span className="ability-mod">{character.abilityMods['CHA'] >= 0 ? "+" : ""}{character.abilityMods['CHA'] || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}