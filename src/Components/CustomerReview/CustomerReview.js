
import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import SideNavBar from '../Shared/NavBar/SideNavBar';


const CustomerReview = () => {
    const [user, setUser] = useContext(UserContext);
    const { register, handleSubmit,} = useForm();

    const onSubmit = data => {
        console.log(data)
        const customerReview = {
            ...user,
          review: data.review,
          reviewerName:data.reviewerName,
          reviewDate: new Date(),
         
        };
    
        const url = `https://blooming-wave-41725.herokuapp.com/addReview`;
    
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(customerReview)
        })
          .then(res => console.log('server side response', res))
      };

    return (
            <div className="container">

                <div className="row">
                    <div className='col-md-3'>
                        <SideNavBar></SideNavBar>
                    </div>
                    <div className='col-md-9 '>
                        <h4 className='text-center mt-5 text-info '>Customer Review</h4>
                        <form className='addServiceForm ' onSubmit={handleSubmit(onSubmit)}>
                           <label>Your Name:</label>
                            <input name="reviewerName" defaultValue="Enter Your Name" ref={register} />
                            <label>Write A Review:</label>
                            <textarea name='review'  defaultValue='I am satisfied With the services provided' ref={register} />

                            <br />
                            <input type="submit" className='btn btn-info' />
                        </form>
                        </div>
                </div>
            </div>
    );
};

export default CustomerReview;