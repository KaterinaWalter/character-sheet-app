import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import OriginForm from "../forms/OriginForm";

export default function CharacterDetails({ onNext, onBack }) {
    const { character } = useContext(CharacterContext);
    console.log('CHARACTER CONTEXT:', character);
    return (
        <div className="container-fluid text-center m-auto">
            <div className="d-flex justify-content-between">
            <button className="btn-primary" onClick={onBack}>← Class Selection</button>
            <button className="btn-primary" onClick={onNext}>Print Sheet →</button>
            </div>
            <hr></hr>
            <div className="row">

                <div className="col-md-7 text-start forms-container">
                    <OriginForm />
                </div>
                <div className="col-md-5 text-start character-container">
                    <h2 className="fw-bold text-center">
                        <span>{character.species || "Human"}</span>
                        <span> </span>
                        <span>{character.class || "Adventurer"}</span>
                    </h2>
                    <div className="row">
                        <div className="col">
                            <ul className="list-unstyled">
                            <li><strong>Background:</strong> {character.background || "None"}</li>
                            <li><strong>Alignment:</strong> {character.alignment || "None"}</li>
                            <li><strong>Proficiencies:</strong>  None</li>
                            <li><strong>Prof. Bonus:</strong> + {character.profBonus || 0}</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled">
                            <li><strong>Armor Class:</strong> {character.armorClass || 0}</li>
                            <li><strong>Max HP:</strong> {character.maxHP || 0}</li>
                            <li><strong>Speed:</strong> {character.speed || 0} ft.</li>
                            <li><strong>Darkvision:</strong> {character.darkvision || 0} ft.</li>
                            </ul>
                        </div>
                    </div>
                    <h3 className="fs-5 fw-bold text-center">Ability Scores:</h3>
                    <div className="row">
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">STR</span>
                            <span className=""> {character.abilityScores['STR'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">DEX</span>
                            <span className=""> {character.abilityScores['DEX'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">CON</span>
                            <span className=""> {character.abilityScores['CON'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">INT</span>
                            <span className=""> {character.abilityScores['INT'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">WIS</span>
                            <span className=""> {character.abilityScores['WIS'] || 0}</span>
                        </div>
                        <div className="col-2 text-center d-flex flex-column">
                            <span className="">CHA</span>
                            <span className=""> {character.abilityScores['CHA'] || 0}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}