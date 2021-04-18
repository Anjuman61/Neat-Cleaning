
import React, { useContext } from 'react';
import { Table } from 'react-bootstrap';
import { ServiceContext } from '../../../App';
import SideNavBar from '../../Shared/NavBar/SideNavBar';
import ServiceDetail from './ServiceDetail';

const ManageService = () => {
    const [services, setServices] = useContext(ServiceContext)
    return (
        <div className=" row">
        <div className="col-md-3">
       <SideNavBar></SideNavBar>

      </div>
      <div className='col-md-9 mt-3'>
      <div>
      <Table striped bordered hover variant="dark">
            <thead>
                <tr>
                    <th>service Name</th>
                    <th>Service Description</th>
                    <th>Price</th>
                    <th colspan="2">Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    services.map(service => <ServiceDetail key={service._id} service={service}></ServiceDetail>)
                }
            </tbody>

        </Table>
      </div>
      </div>
    </div>
    );
};

export default ManageService;