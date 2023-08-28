import React from 'react'
import '../css/work.css'
import Sepretor from '../../section-cards/js/Sepretor'
import { WorkData } from '../../data/WorkData'
import WorkCard from '../../section-cards/js/WorkCard'


const Work = () => {
    const data = WorkData
    return (
        <section id='work'>
            <div className="container">
                <Sepretor />
                <h2 className='page-title'>works</h2>
                {
                    data.map((item) => {
                        return (
                            <div className='row' key={item.id}>
                                <WorkCard item={item} />
                            </div>
                        )
                    })
                }

            </div>

        </section >
    )
}

export default Work
