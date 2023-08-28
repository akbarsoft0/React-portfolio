import React from 'react'
import "../css/skill-card.css"

const SkillCard = ({ skill }) => {
    return (
        <div className='row'>
            {skill.map((item, index) => {
                return (
                    <div className='col-lg-3 col-md-4 col-6'>
                        <div className="skill-card" key={index}>
                            <div className="s-icon">{item.icon}</div>
                            <h6 className='s-name'>{item.name}</h6>
                        </div>
                    </div >
                )
            })}
        </div>
    )
}

export default SkillCard
