
import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const ServiceDetail = (props) => {
    const{name, description,pricing, _id}=props.service;
    const history = useHistory();
    const deleteService = (id) => {
        fetch(`https://blooming-wave-41725.herokuapp.com/service/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(result => console.log(result))

    }

    const addService=()=>{
        history.push('/addService')
    }
    return (
        <tr>
            <td>{name}</td>
            <td>{description}</td>
            <td>{pricing}</td>
            <td><Button className='btn btn-info' onClick={() => deleteService(_id)}>Delete</Button></td>
            <td><Button className='btn btn-info' onClick={addService}>Add</Button></td>
        </tr>
    );
};

export default ServiceDetail;