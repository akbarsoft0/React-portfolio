import React from 'react'
import '../css/work-card.css'

const WorkCard = ({ item }) => {
    return (
        <div className='work-card'>
            <div className="row">

                <div className='col-lg-8 order-lg-1 order-2'>
                    <div className=' work-info'>
                        <h3>{item.designation}</h3>
                        <h5>{item.company}</h5>
                        <h6>{item.dateJoining} - {item.dateEnding}</h6>
                        <p>{item.work}</p>
                    </div>
                </div>
                <div className="col-lg-4 order-lg-2 order-1">
                    <div className="work-img">
                        <img src={item.companyLogo} alt="logo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WorkCard
