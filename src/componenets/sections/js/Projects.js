import React from 'react'
import '../css/Projects.css'
import { ProjectsData } from '../../../data/ProjectsData'
import ProjectsCard from '../../section-cards/js/ProjectsCard'
import Sepretor from '../../section-cards/js/Sepretor'
import Social from '../../section-cards/js/Social'

const Projects = () => {
    const data = ProjectsData
    // AOS.init();
    return (
        <>
            <section id='projects'>
                <div className="container">
                    <Sepretor />
                    <h3 className='page-title'>projects</h3>
                    {data.map((Project) => {
                        return (
                            // <> <div data-aos="fade-up"
                            //     data-aos-anchor-placement="center-bottom"
                            <><div
                                key={Project.id} >
                                <ProjectsCard Project={Project} />
                            </div>

                            </>)
                    })}
                    <p className='note'>I'm interested in collaborating on JavaScript projects using CodePen and Github. You can find my work on these platforms:</p>
                    <Social />
                </div>
            </section >

        </>
    )
}

export default Projects
