import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import team from '../../../images/cleaning-service.png';
import service from '../../../images/24-hours-support.png';
import guarantee from '../../../images/guarantee.png';

const infosData=[
    {
        title:'Professional team',
        description:'Our team uses a sanitizing solution to wipe down light switches doorknobs.',
        icon: team,
    },
    {
        title:'24/7 Services',
        description:'We encourage our customers to let us know in advance of an appointment.',
        icon: service,

    },
    {
        title:'Service Guarantee',
        description:'We are telling our team members to switch out all cleaning cloths and mop heads.',
        icon:guarantee,

    }
]

const CompanyInfo = () => {
    return (
        <div className='text-center my-5'>
            <div className='text-center'>
            <h4>Why Choose Us</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. <br/> Assumenda quaerat id rerum quos beatae placeat.</p>
            </div>
           <div className='container d-flex justify-content-center'>
           <div className='w-75 row '>
         {
             infosData.map(info=><InfoCard key={info.title} info={info}></InfoCard>)
          }
         </div>
           </div>
           
        </div>
    );
};

export default CompanyInfo;