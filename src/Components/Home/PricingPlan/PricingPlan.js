import React from 'react';
import PricingPlanCard from '../PricingPlanCard/PricingPlanCard';
const plan=[
    {
        title:'Basic Plan',
        item1:'Office Cleaning',
        item2:'Home Cleaning',
        savings:'10%'   
    },
    {
        title:'Smart Plan',
        item1:'Office Cleaning',
        item2:'Home Cleaning',
        item3:'Pest Control',
        savings:'20%' 

    },
    {
        title:'Silver Plan',
        item1:'Office Cleaning',
        item2:'Home Cleaning',
        item3:'Pest Control',
        item4:'Window Cleaning',
        savings:'30%' 

    }
]

const PricingPlan = () => {
    return (
        <div>
            <div className='text-center'>
            <h5>Our Pricing Plan</h5>
            <h3>Check Our Amazing Pricing Plan <br/>To get Available discount</h3>
            </div>
            <div  className='container'>
            <div className='row my-5'>
                {
                    plan.map(plan=><PricingPlanCard key={plan.title} plan={plan}></PricingPlanCard>)
                }
            </div>
            </div>
            
            
        </div>
    );
};

export default PricingPlan;