import { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function ClassSelection({ onNext }) {
  const classes = [
    { imgSrc: './src/assets/ClassIcon-Barbarian.svg', classTitle: 'Barbarian', classColor: 'var(--barbarian-grad)' },
    { imgSrc: './src/assets/ClassIcon-Bard.svg', classTitle: 'Bard', classColor: 'var(--bard-grad)' },
    { imgSrc: './src/assets/ClassIcon-Cleric.svg', classTitle: 'Cleric', classColor: 'var(--cleric-grad)' },
    { imgSrc: './src/assets/ClassIcon-Druid.svg', classTitle: 'Druid', classColor: 'var(--druid-grad)' },
    { imgSrc: './src/assets/ClassIcon-Fighter.svg', classTitle: 'Fighter', classColor: 'var(--fighter-grad)' },
    { imgSrc: './src/assets/ClassIcon-Monk.svg', classTitle: 'Monk', classColor: 'var(--monk-grad)' },
    { imgSrc: './src/assets/ClassIcon-Paladin.svg', classTitle: 'Paladin', classColor: 'var(--paladin-grad)' },
    { imgSrc: './src/assets/ClassIcon-Ranger.svg', classTitle: 'Ranger', classColor: 'var(--ranger-grad)' },
    { imgSrc: './src/assets/ClassIcon-Rogue.svg', classTitle: 'Rogue', classColor: 'var(--rogue-grad)' },
    { imgSrc: './src/assets/ClassIcon-Sorcerer.svg', classTitle: 'Sorcerer', classColor: 'var(--sorcerer-grad)' },
    { imgSrc: './src/assets/ClassIcon-Warlock.svg', classTitle: 'Warlock', classColor: 'var(--warlock-grad)' },
    { imgSrc: './src/assets/ClassIcon-Wizard.svg', classTitle: 'Wizard', classColor: 'var(--wizard-grad)' },
  ];

  return (
    <div className="container" id="class-btn-container">
      <h2 className="text-center fs-3 my-4">Select your Class:</h2>
      {Array.from({ length: 3 }).map((_, rowIndex) => (
        <div className="row" key={rowIndex}>
          {classes.slice(rowIndex * 4, rowIndex * 4 + 4).map((classInfo, index) => (
            <div className="col-md-3" key={index}>
              <ClassCard
                imgSrc={classInfo.imgSrc}
                classTitle={classInfo.classTitle}
                classColor={classInfo.classColor}
                onNext={onNext}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export function ClassCard({ imgSrc, classTitle, classColor, onNext }) {
  const { setCharacterClass } = useContext(CharacterContext);

  const handleClassSelect = () => {
    setCharacterClass(classTitle);
    onNext();
  };

  return (
      <div className="card my-2" style={{ background: classColor, color: classColor }} >
        <img src={imgSrc} className="card-img-top" alt={`${classTitle} icon`} />
        <div className="card-body">
          <button className="btn btn-primary w-100" onClick={handleClassSelect}>{classTitle}</button>
        </div>
      </div>
  );
}