import React from 'react';
import { useHistory } from 'react-router-dom';
import './ServiceCard.css';

const ServiceCard = (props) => {
    // console.log(props)
    const{name, description,pricing, imageURL, _id}=props.service;
    const history = useHistory();
    const handleServiceBooking=(id)=>{
        history.push(`booking/${id}`)
    }
    return (
        <div onClick={()=>handleServiceBooking(_id)}  className='my-4 d-flex align-items-center service-card'> 
            <div className='serviceCard-img-container'>
                <img width='70px' className='serviceCard-img' src={imageURL} alt="" />
            </div>
            <div className='mt-2 serviceCard-text-container'>
                <h5><strong>{name}</strong></h5>
                <p>{description}</p>
                <p><strong>{pricing}</strong></p>
            </div>
        </div>
    );
};

export default ServiceCard;