import React from 'react';
import { skills } from '../../helperFiles/skills';
import PageContent from '../../UI/pageContent/pageContent';
import Skill from './skill/skill';
import './skills.css';

export default function Skills() {
  return (
    <PageContent idTp='Skills' classTp='skills text-center'>
      <h1 className='text-2xl tabet:text-3xl laptop:text-4xl font-extrabold uppercase'>Skills</h1>
      <div className='flex flex-col items-center'>
        <h2 className='text-lg tablet:text-xl laptop:text-2xl'>Front-end</h2>
        <div className='flex justify-evenly gap-6 flex-center flex-wrap'>
          {skills[0].front.map((frontTech, index) => (
            <Skill key={index} item={frontTech} />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-lg tablet:text-xl laptop:text-2xl'>Design</h2>
        <div className='flex justify-evenly gap-6 flex-center flex-wrap'>
          {skills[1].design.map((designSoft, index) => (
            <Skill key={index} item={designSoft} />
          ))}
        </div>
      </div>

      <div className='flex flex-col items-center'>
        <h2 className='text-lg tablet:text-xl laptop:text-2xl'>Other </h2>
        <div className='flex justify-evenly gap-6 flex-center flex-wrap'>
          {skills[2].other.map((otherSoft, index) => (
            <Skill key={index} item={otherSoft} />
          ))}
        </div>
      </div>
    </PageContent>
  )
};
