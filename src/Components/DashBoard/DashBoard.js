
import React, { useContext, useEffect,useState } from 'react';
import { Table } from 'react-bootstrap';
import { UserContext } from '../../App';
import SideNavBar from '../Shared/NavBar/SideNavBar';
import BookingList from './BookingList';

const DashBoard = () => {
    const [user, setUser] = useContext(UserContext);
    const [bookingList,setBookingList]=useState([]);
    

    useEffect(() => {
        fetch('https://glacial-castle-93985.herokuapp.com/bookings',{
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify({ email: user.email })
        } )
            .then(res => res.json())
            .then(data => {
                setBookingList(data)
                console.log(data)
            })
    }, [user.email])

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
                    <th>Customer Name</th>
                    <th>Service Name</th>
                    <th>Price</th>
                    <th >Status</th>
                </tr>
            </thead>
            <tbody>
                {
                    bookingList.map(bookings => <BookingList key={bookings._id} bookings={bookings}></BookingList>)
                }
            </tbody>

        </Table>
      </div>
      </div>
    </div>
    );
};

export default DashBoard;