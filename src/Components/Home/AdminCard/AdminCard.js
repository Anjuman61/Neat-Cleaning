import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const AdminCard = (props) => {
    const{name, email, imageURL}=props.admin
    console.log(props)
    return (
        <div className="col-md-6 col-sm-6 text-center mb-5" >
      
        <div>
        <img style={{height: '150px'}} className="img-fluid mb-3" src={imageURL} alt=""/>
        <h6 className='text-info'><strong>{name}</strong></h6>
        <p className='text-secondary'><FontAwesomeIcon icon={faEnvelope} /> {email}</p>
        </div>
    
    </div>
    );
};

export default AdminCard;