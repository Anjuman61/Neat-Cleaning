import React from 'react';
import './PricingPlanCard.css';
import { Button, Card } from 'react-bootstrap';

const PricingPlanCard = (props) => {
    const {title,item1,item2,item3,item4,savings}=props.plan
    return (
        <div className='col-md-4'>
            <Card style={{ width: '18rem' }} className='pricing-card'>
            <Card.Body  >
                <Card.Title>
                {title}
                <h6 className='mt-3'>Save Up to {savings}</h6>
                </Card.Title>
                <Card.Text className="list-unstyled mt-4">
                    <li>{item1}</li>
                    <li>{item2}</li>
                    <li>{item3}</li>
                    <li>{item4}</li>
                </Card.Text>
                <Button variant="info">Book Now</Button>
            </Card.Body>
        </Card>
        </div>
    );
};

export default PricingPlanCard;