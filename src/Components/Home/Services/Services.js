import React, { useContext } from 'react';
import { ServiceContext } from '../../../App';
import serviceS from '../../../images/cleaningS.PNG'
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css';


const Services = () => {
    const [services, setServices] = useContext(ServiceContext)
    return (
        <div className='d-flex align-items-center my-5'>
            <div className='row service-container'>

                <div className="col-md-4 offset-md-1 my-2 service-detail ">
                    <h4>Our Services</h4>
                    {
                        services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                    }
                </div>
                < div className="col-md-6 offset-md-1 my-2 ">
                    <img src={serviceS} alt="" className="img-fluid mt-3 service-img" />
                </div>


            </div>
        </div>
    );
};

export default Services;