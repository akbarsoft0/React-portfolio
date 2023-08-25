import React from 'react'
import './work-card.css'

const WorkCard = ({ item }) => {
    return (
        <div className='row work-card'>
            <div className='col-lg-6'>
                <div className=' work-info'>
                    <h3>{item.designation}</h3>
                    <h5>{item.company}</h5>
                    <h6>{item.dateJoining} - {item.dateEnding}</h6>
                    <p>{item.work}</p>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="work-img">
                    <img src={item.companyLogo} alt="logo" />
                </div>
            </div>
        </div>
    )
}

export default WorkCard
