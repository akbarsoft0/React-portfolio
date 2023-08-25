import React from 'react'
import './skills.css'
import Sepretor from '../../commen/Sepretor'
import { SkillsData } from '../../data/SkillsData'
import SkillCard from "./SkillCard.js";




const Skills = () => {
    const data = SkillsData;
    return (
        <section id='skills'>
            <div className="container">
                <Sepretor />
                <h3 className='page-title'>Skills</h3>
                {data.map((item, index) => {
                    return (
                        <div className='skills-container' key={index}>
                            <h3 className='skill-type'>{item.type}</h3>
                            <SkillCard skill={item.list} />
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default Skills