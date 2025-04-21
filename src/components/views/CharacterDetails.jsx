import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';
import BackgroundForm from "../forms/BackgroundForm";
import ClassSpecificForm from "../forms/ClassSpecificForm";
import AbilityForm from "../forms/AbilityForm";

export default function CharacterDetails({ onNext, onBack }) {
    const { character } = useContext(CharacterContext);
    console.log('CHARACTER CONTEXT:', character);
    return (
        <div>
            <button onClick={onBack}>Back</button>
            <h2>Character Details</h2>
            <p><strong>Class:</strong> {character.class || "Not selected"}</p>
            <p><strong>Background:</strong> {character.background || "Not selected"}</p>
            <BackgroundForm />
            <ClassSpecificForm />
            <AbilityForm />
            <button onClick={onNext}>Next</button>
        </div>
    );
}