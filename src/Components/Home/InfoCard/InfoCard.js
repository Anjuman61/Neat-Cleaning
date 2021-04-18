import React from 'react';
import './infoCard.css'

const InfoCard = (props) => {
    const { title, description, icon } = props.info
    return (
        <div  className='col-md-4 my-5'> 
            <div className='info-icon'>
                <img width='80px' src={icon} alt="" />
            </div>
            <div className='mt-4'>
                <h5><strong>{title}</strong></h5>
                <p>{description}</p>
            </div>
        </div>
    );
};

export default InfoCard;