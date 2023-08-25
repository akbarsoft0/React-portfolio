import React from 'react'
import './project-card.css'
const ProjectsCard = ({ Project }) => {
    return (
        <>
            <div className="project-info">
                <div className="row align-items-center">
                    <div className="col-lg-7">
                        <h3>{Project.title}</h3>
                        {Project.link && <a className='myBtn' href={Project.link} target="_blank"><i className="fi fi-rs-globe"></i> demo</a>}
                        {Project.github && <a className='myBtn' href={Project.github} target="_blank"><i className="fi fi-brands-github"></i> github</a>}
                        <p>{Project.about}</p>
                        {Project.tags.map((tag, index) => {
                            return <span className='tag' key={index}>{tag}</span>
                        })}
                    </div>
                    <div className='col-lg-5'>
                        <a href={Project.link} target="_blank" rel="noopener noreferrer">
                            <img className='img-fluid img-thumbnail ' src={Project.image} alt="project" /></a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ProjectsCard
