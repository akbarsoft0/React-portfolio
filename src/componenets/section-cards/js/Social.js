import React from 'react';
import '../css/social.css';
import { SocialData } from '../../../data/SocialData';

const Social = () => {
    const data = SocialData;

    return (
        <div className='s-container'>
            {data.map((newdata) => {
                return (
                    <div className='s-div' key={newdata.id}>
                        <a href={newdata.link} title={newdata.platform} >
                            <img className='img-fluid' src={newdata.icon} alt={newdata.platform} />
                            <span>{newdata.platform}</span>
                        </a>
                    </div>
                )
            })}
        </div>
    );
};

export default Social;
