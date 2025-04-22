import { useContext, useState } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function OriginForm() {
    const { setCharacter } = useContext(CharacterContext);

    // State to track selected species and subspecies
    const [selectedSpecies, setSelectedSpecies] = useState('');
    const [selectedSubspecies, setSelectedSubspecies] = useState('');

    // Mapping of species to subspecies
    const speciesToSubspecies = {
        Dragonborn: ['Black Dragonborn', 'Blue Dragonborn', 'Brass Dragonborn', 'Bronze Dragonborn', 'Copper Dragonborn', 'Gold Dragonborn', 'Green Dragonborn', 'Red Dragonborn', 'Silver Dragonborn', 'White Dragonborn'],
        Elf: ['High Elf', 'Wood Elf', 'Drow'],
        Gnome: ['Forest Gnome', 'Rock Gnome'],
        Goliath: ['Cloud Giant', 'Fire Giant', 'Frost Giant', 'Hill Giant', 'Stone Giant', 'Storm Giant'],
        Tiefling: ['Abyssal Tiefling', 'Chtonian Tiefling', 'Infernal Tiefling'],
    };

    // Mapping of species to traits
    const speciesToTraits = {
        Aasimar: ['Celestial Resistance', 'Healing Hands', 'Light Bearer', 'Celestial Revelation'],
        Dragonborn: ['Dragon Ancestry', 'Breath Weapon', 'Damage Resistance', 'Draconic Flight'],
        Dwarf: ['Dwarven Resilience', 'Dwarven Toughness', 'Stonecunning'],
        Elf: ['Elven Lineage', 'Fey Ancestry', 'Keen Senses', 'Trance'],
        Gnome: ['Gnomish Cunning', 'Gnomish Lineage'],
        Goliath: ['Giant Ancestry', 'Large Form', 'Powerful Build'],
        Halfling: ['Brave', 'Halfling Nimbleness', 'Luck', 'Naturally Stealthy'],
        Human: ['Resourceful', 'Skillful', 'Versatile'],
        Orc: ['Adrenaline Rush', 'Relentless Endurance'],
        Tiefling: ['Infernal Legacy', 'Otherworldly Presence'],
    };

    const handleSpeciesChange = (event) => {
        const species = event.target.value;
        setSelectedSpecies(species);
        setSelectedSubspecies(''); // Reset subspecies when species changes
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            species,
            traits: speciesToTraits[species] || [], // Add traits based on species
        }));
    };

    const handleSubspeciesChange = (event) => {
        const subspecies = event.target.value;
        setSelectedSubspecies(subspecies);
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            species: subspecies, // Replace species with subspecies
        }));
    };

    const handleBackgroundChange = (event) => {
        const background = event.target.value;
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            background,
        }));
    };

    const handleAlignmentChange = (event) => {
        const alignment = event.target.value;
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            alignment,
        }));
    };

    return (
        <div>
            <h3 className="text-center">Choose Origin</h3>
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
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="background">Background</label>
                    <select id="background" className="form-select" onChange={handleBackgroundChange}>
                        <option value="">Select a background</option>
                        <option value="Acolyte">Acolyte</option>
                        <option value="Charlatan">Charlatan</option>
                        <option value="Criminal">Criminal</option>
                        <option value="Entertainer">Entertainer</option>
                        <option value="Farmer">Farmer</option>
                        <option value="Guard">Guard</option>
                        <option value="Guide">Guide</option>
                        <option value="Hermit">Hermit</option>
                        <option value="Merchant">Merchant</option>
                        <option value="Noble">Noble</option>
                        <option value="Sage">Sage</option>
                        <option value="Sailor">Sailor</option>
                        <option value="Scribe">Scribe</option>
                        <option value="Soldier">Soldier</option>
                        <option value="Wayfarer">Wayfarer</option>
                    </select>
                </div>
                <div className="col-6">
                </div>
            </div>
            <div className="row">
                <div className="col-6">
                    <label htmlFor="alignment">Moral Alignment</label>
                    <select id="alignment" className="form-select" onChange={handleAlignmentChange}>
                        <option value="">Select an alignment</option>
                        <option value="Lawful Good">Lawful Good</option>
                        <option value="Neutral Good">Neutral Good</option>
                        <option value="Chaotic Good">Chaotic Good</option>
                        <option value="Lawful Neutral">Lawful Neutral</option>
                        <option value="True Neutral">True Neutral</option>
                        <option value="Chaotic Neutral">Chaotic Neutral</option>
                        <option value="Lawful Evil">Lawful Evil</option>
                        <option value="Neutral Evil">Neutral Evil</option>
                        <option value="Chaotic Evil">Chaotic Evil</option>
                        <option value="Unaligned">Unaligned</option>
                    </select>
                </div>
                <div className="col-6">
                </div>
            </div>
        </div>
    );
}