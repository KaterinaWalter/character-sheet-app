import BackgroundForm from "../forms/BackgroundForm";
import ClassSpecificForm from "../forms/ClassSpecificForm";
import AbilityForm from "../forms/AbilityForm";

export default function CharacterDetails() {
    return (
        <div>
            <BackgroundForm />
            <ClassSpecificForm />
            <AbilityForm />
        </div>
    );
}