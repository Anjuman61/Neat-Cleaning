
import React from 'react';
import './ReviewCard.css'
import customerPic from '../../../images/customer.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserEdit } from '@fortawesome/free-solid-svg-icons';

const ReviewCard = (props) => {
   const{reviewerName,review}=props.review
    return (
        <div className="col-md-4 col-sm-6 text-center mb-5">
      
            <div className=" reviewCard">
            <img style={{height: '150px'}} className="img-fluid mb-3" src={customerPic} alt=""/>
            <h6 className='text-info'>Customer Name:{reviewerName}</h6>
            <p className='text-secondary'><FontAwesomeIcon icon={faUserEdit} />"{review}"</p>
            </div>
        
        </div>
    );
};

export default ReviewCard;