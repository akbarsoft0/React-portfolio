import React from 'react'
import '../css/skills.css'
import Sepretor from '../../section-cards/js/Sepretor'
import { SkillsData } from '../../data/SkillsData'
import SkillCard from "../../section-cards/js/SkillCard";




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