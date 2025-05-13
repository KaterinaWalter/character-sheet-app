import { useContext, useState } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function OriginForm() {
    const { setCharacter, speciesToSubspecies, speciesStats, backgroundStats } = useContext(CharacterContext);

    // State to track selected species and subspecies
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedSubspecies, setSelectedSubspecies] = useState('');
    const [selectedBackground, setSelectedBackground] = useState('');
    const [abilityAllocation, setAbilityAllocation] = useState({});

    const handleSpeciesChange = (event) => {
        const species = event.target.value;
        setSelectedSpecies(species);
        setSelectedSubspecies(''); // Reset subspecies when species changes
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            species,
            size: speciesStats[species]?.size || '',
            speed: speciesStats[species]?.speed || 0, // Set speed based on species
            darkvision: speciesStats[species]?.darkvision || 0, // Set darkvision based on species
            traits: speciesStats[species]?.traits || [], // Add traits based on species
        }));
    };

    const handleSubspeciesChange = (event) => {
        const subspecies = event.target.value;
        setSelectedSubspecies(subspecies);
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            species: subspecies, // Replace species with subspecies
            size: speciesStats[subspecies]?.size || '', // Set size based on subspecies
            speed: speciesStats[subspecies]?.speed || 0, // Set speed based on subspecies
            darkvision: speciesStats[subspecies]?.darkvision || 0, // Set darkvision based on subspecies
            traits: speciesStats[subspecies]?.traits || [], // Add traits based on subspecies
        }));
    };

    /* After selecting a background, user decides which ability scores to improve. 
    Each background has three possible abilities; user can choose to increase 
    one of those scores by 2 and a different one by 1, or increase all three by 1. 
    None of these increases can raise a score above 20. */

    const handleBackgroundChange = (event) => {
        const background = event.target.value;
        setSelectedBackground(background);
        setAbilityAllocation({}); // Reset ability allocation when background changes
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            background,
        }));
    };

    const handleAbilityAllocationChange = (ability, value) => {
        setAbilityAllocation((prev) => ({
            ...prev,
            [ability]: value,
        }));
    };

    const handleAbilityAllocationSubmit = () => {
        const updatedAbilityScores = { ...abilityAllocation };
        setCharacter((prevCharacter) => {
            const updatedScores = { ...prevCharacter.abilityScores };
            for (const [ability, points] of Object.entries(updatedAbilityScores)) {
                updatedScores[ability] += points;
            }
            return {
                ...prevCharacter,
                abilityScores: updatedScores,
            };
        });
    };

    return (
        <div className="form-section p-2 pb-3 mb-3">
            <h2 className="text-center">Character Origin:</h2>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="species">Species</label>
                    <select id="species" className="form-select" onChange={handleSpeciesChange}>
                        <option value="">Select a species</option>
                        <option value="Aasimar">Aasimar</option>
                        <option value="Dragonborn">Dragonborn</option>
                        <option value="Dwarf">Dwarf</option>
                        <option value="Elf">Elf</option>
                        <option value="Gnome">Gnome</option>
                        <option value="Goliath">Goliath</option>
                        <option value="Halfling">Halfling</option>
                        <option value="Human">Human</option>
                        <option value="Orc">Orc</option>
                        <option value="Tiefling">Tiefling</option>
                    </select>
                </div>
                {speciesToSubspecies[selectedSpecies] && (
                <div className="col-6">
                    <label htmlFor="subspecies">Subspecies</label>
                    <select id="subspecies" className="form-select" onChange={handleSubspeciesChange}>
                        <option value="">Select a subspecies</option>
                        {speciesToSubspecies[selectedSpecies].map((subspecies) => (
                            <option key={subspecies} value={subspecies}>{subspecies}</option>
                        ))}
                    </select>
                </div>
                )}
                {selectedSubspecies && (
                <div className="col-12">
                    <p className="description">{speciesStats[selectedSubspecies].description}</p>
                </div>
                )}
                {selectedSpecies && !selectedSubspecies && (
                <div className="col-12">
                    <p className="description">{speciesStats[selectedSpecies].description}</p>
                </div>
                )}
            </div>
            <hr/>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="background">Background</label>
                    <select id="background" className="form-select" onChange={handleBackgroundChange}>
                        <option value="">Select a background</option>
                        {Object.keys(backgroundStats).map((background) => (
                            <option key={background} value={background}>{background}</option>
                        ))}
                    </select>
                    {selectedBackground && (
                        <p className="description">{backgroundStats[selectedBackground].description}</p>
                    )}
                </div>
                {selectedBackground && (
                    <div className="col-6">
                        <label>Ability Score Bonuses</label>
                        <p><em>Your background grants 3 bonus points to distribute among the following abilities:</em></p>
                        <div className="row text-center m-auto">
                        {backgroundStats[selectedBackground].abilityBonuses.map((ability) => (
                            <div key={ability} className="col-4">
                                <label htmlFor={`ability-${ability}`}>{ability}</label>
                                <input id={`ability-${ability}`} type="number" className="form-control" min="0" max="2" value={abilityAllocation[ability] || 0} onChange={(e) => handleAbilityAllocationChange(ability, parseInt(e.target.value) || 0)}/>
                            </div>
                        ))}
                        </div>
                        <div className="row m-auto">
                            <button className="btn btn-primary mt-2" onClick={handleAbilityAllocationSubmit}>Apply Points</button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}