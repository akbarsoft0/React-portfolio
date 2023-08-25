import React from 'react'
import './Projects.css'
import { ProjectsData } from '../../data/ProjectsData'
import ProjectsCard from './ProjectsCard'
import Sepretor from '../../commen/Sepretor'
const Projects = () => {
    const data = ProjectsData
    return (
        <>
            <section id='projects'>
                <div className="container">
                    <Sepretor />
                    <h3 className='page-title'>projects</h3>
                    {data.map((Project) => {
                        return (
                            <div key={Project.id}
                            >
                                <ProjectsCard Project={Project} />
                            </div>
                        )
                    })}

                </div>
            </section>

        </>
    )
}

export default Projects
