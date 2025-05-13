import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

/* TODO:
1. Add a print button that opens the print dialog.
2. Format and style to look like a character sheet.
*/
export default function PrintableSheet({ onBack }) {
    const { character } = useContext(CharacterContext);    
    return (
        <div className="container-fluid text-center m-auto">
            <div className="container">
                <div className="d-flex justify-content-between">
                    <button className="btn btn-primary" onClick={onBack}>← Edit Character</button>
                    <button className="btn btn-primary" onClick={print}>Print</button>
                </div>
            </div>
            <br></br>
            <div className="row">
                <div id="character-container-printable">
                    <p>TODO: Format character details into letter-sized layout and activate Print button</p>
                </div>
            </div>
        </div>
    );
}