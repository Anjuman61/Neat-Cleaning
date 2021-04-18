
import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { ServiceContext, UserContext } from '../../../App';
import SideNavBar from '../../Shared/NavBar/SideNavBar';
import PaymentProcess from '../PaymentProcess/PaymentProcess';

const Booking = () => {
  const [user, setUser] = useContext(UserContext);
  const [services, setServices] = useContext(ServiceContext);
  const [bookingData, setBookingData]=useState(null)
  const { register, handleSubmit} = useForm();
  const { id } = useParams()
  useEffect(() => {
    fetch(`https://glacial-castle-93985.herokuapp.com/booking/${id}`)
      .then(res => res.json())
      .then(data => setServices(data))
  }, [id])

  const onSubmit = data => {
    setBookingData(data)
    
  }
 
    const handlePaymentSuccess= paymentId=>{
      const newService = { ...user,
        booking:bookingData,
        paymentId,
       bookingTime: new Date() }

      fetch('https://glacial-castle-93985.herokuapp.com/addBooking', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(newService)
      })
          .then(res => res.json())
          .then(data => {
              if (data) {
                  alert('your Booking Placed Successfully')
              }
          })
  }
  return (
    <div className="container">

      <div className="row">
        <div className='col-md-3'>
          <SideNavBar></SideNavBar>
        </div>
        <div className='col-md-9 '>
          <h4 className='text-center mt-5 text-info '>Booking page</h4>
          <div style={{display:bookingData? 'none':'block'}}>
            <h3>Booking Details</h3>
            <form className='addServiceForm ' onSubmit={handleSubmit(onSubmit)}>
              <label>Service Name:</label>
              <input name='name' defaultValue={services.name} ref={register} />

              <label>Service Cost:</label>
              <input name='price' defaultValue={services.pricing} ref={register} />

              <label >Select Status:</label>
                <select name='status'  ref={register}>
                 <option value="pending">pending</option>
                 <option value="ongoing">ongoing</option>
                 <option value="done">done</option>
                </select>
              <br />
              <input type="submit" className='btn btn-info' />
            </form>
          </div>
          <div className='my-4' style={{display:bookingData? 'block':'none'}}>
                       
                        <PaymentProcess handlePayment={handlePaymentSuccess}>Please Pay here</PaymentProcess>
                  </div>

        </div>

      </div>
    </div>

  );
};
export default Booking;