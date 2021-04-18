import React, { useContext, useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';

const BookingList = (props) => {
    const bookingData = props.bookings;
    
    const [user, setUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        fetch('https://glacial-castle-93985.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ email: user.email })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setIsAdmin(data)})
    }, [])
   
  const handleUpdate=(id)=>{
         const bookings = bookingData.booking.status;
         console.log(bookings)
         fetch(`https://glacial-castle-93985.herokuapp.com/update/${id}`,{
           method: 'PATCH',
           headers: {'content-type': 'application/json'},
           body: JSON.stringify({bookings})
         })
         .then(res=>res.json())
         .then(data=>console.log('data',data))
  }
    return (

        <tr>
            <td>{bookingData.name}</td>
            <td>{bookingData.booking.name}</td>
            <td>{bookingData.booking.price}</td>
            {isAdmin?
            (<div>
                <td>
                 <form action="" >
                   <select name='status' >
                      <option value={bookingData.booking.status}>pending</option>
                      <option value={bookingData.booking.status}>ongoing</option>
                      <option value={bookingData.booking.status}>done</option>
                    </select>
                   </form>
                </td>
                <td><Button className='btn btn-secondary' onClick={() => handleUpdate(bookingData._id)}>Update</Button></td>
            </div>
              ): 
                (<td>{bookingData.booking.status}</td>)
            }
         
        </tr>

    );
};

export default BookingList;