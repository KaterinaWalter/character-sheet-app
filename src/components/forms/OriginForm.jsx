import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function OriginForm() {
    const { setCharacter } = useContext(CharacterContext);

    const handleSpeciesChange = (event) => {
        const species = event.target.value;
        setCharacter((prevCharacter) => ({
            ...prevCharacter,
            species,
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
                <div className="col-6">
                    <label htmlFor="subspecies">Subspecies</label>
                </div>
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
                    <label htmlFor="feat">Feat</label>
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
            </div>
        </div>
    );
}