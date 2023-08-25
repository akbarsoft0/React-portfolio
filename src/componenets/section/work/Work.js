import React from 'react'
import './work.css'
import Sepretor from '../../commen/Sepretor'
import { WorkData } from '../../data/WorkData'
import WorkCard from './WorkCard'


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
