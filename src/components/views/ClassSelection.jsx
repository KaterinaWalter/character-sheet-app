import React, { useContext } from 'react';
import { CharacterContext } from '../../context/CharacterContext';

export default function ClassSelection({ onNext }) {
  const classes = [
    { imgSrc: './src/assets/ClassIcon-Barbarian.svg', classTitle: 'Barbarian', classColor: 'var(--barbarian)' },
    { imgSrc: './src/assets/ClassIcon-Bard.svg', classTitle: 'Bard', classColor: 'var(--bard)' },
    { imgSrc: './src/assets/ClassIcon-Cleric.svg', classTitle: 'Cleric', classColor: 'var(--cleric)' },
    { imgSrc: './src/assets/ClassIcon-Druid.svg', classTitle: 'Druid', classColor: 'var(--druid)' },
    { imgSrc: './src/assets/ClassIcon-Fighter.svg', classTitle: 'Fighter', classColor: 'var(--fighter)' },
    { imgSrc: './src/assets/ClassIcon-Monk.svg', classTitle: 'Monk', classColor: 'var(--monk)' },
    { imgSrc: './src/assets/ClassIcon-Paladin.svg', classTitle: 'Paladin', classColor: 'var(--paladin)' },
    { imgSrc: './src/assets/ClassIcon-Ranger.svg', classTitle: 'Ranger', classColor: 'var(--ranger)' },
    { imgSrc: './src/assets/ClassIcon-Rogue.svg', classTitle: 'Rogue', classColor: 'var(--rogue)' },
    { imgSrc: './src/assets/ClassIcon-Sorcerer.svg', classTitle: 'Sorcerer', classColor: 'var(--sorcerer)' },
    { imgSrc: './src/assets/ClassIcon-Warlock.svg', classTitle: 'Warlock', classColor: 'var(--warlock)' },
    { imgSrc: './src/assets/ClassIcon-Wizard.svg', classTitle: 'Wizard', classColor: 'var(--wizard)' },
  ];

  return (
    <div className="container" id="class-btn-container">
      <div className="row">
        {classes.map((classInfo, index) => (
          <ClassCard key={index} imgSrc={classInfo.imgSrc} classTitle={classInfo.classTitle} classColor={classInfo.classColor} onNext={onNext} />
        ))}
      </div>
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
    <div className="col-md my-2">
      <div className="card" >
        <img src={imgSrc} className="card-img-top" alt={`${classTitle} icon`} style={{ background: classColor, color: classColor }} />
        <div className="card-body">
          <button className="btn btn-primary w-100" onClick={handleClassSelect}>{classTitle}</button>
        </div>
      </div>
    </div>
  );
}