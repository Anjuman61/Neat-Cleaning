import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import SideNavBar from '../../Shared/NavBar/SideNavBar';
import './AddAdmin.css'

const AddAdmin = () => {
    const { register, handleSubmit,} = useForm();
    const [imageURL, setImageURL] = useState(null);

    const handleImageUpload = (event) => {
        console.log(event.target.files[0])
        const imageData = new FormData()
        imageData.set('key', 'f01e6723c62d22713d8dcf3ac7800dae')
        imageData.append('image', event.target.files[0])
    
        axios.post('https://api.imgbb.com/1/upload', imageData)
          .then(function (response) {
            setImageURL(response.data.data.display_url);
          })
          .catch(function (error) {
            console.log(error);
          });
      }

      const onSubmit = data => {
        console.log(data)
        const newAdmin = {
          name: data.name,
          email: data.email,
          imageURL: imageURL
        };
    
        const url = `https://blooming-wave-41725.herokuapp.com/addAdmin`;
    
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newAdmin)
        })
          .then(res => {
            alert('Admin Added Successfully')
            console.log('server side response', res)})
      };
    return (
        <div className=" row">
     <div className='col-md-3 '>
     <SideNavBar></SideNavBar>
     </div>
      <div className='col-md-12'>
      <form className='adminForm col-md-9' onSubmit={handleSubmit(onSubmit)}>
        <label>Admin Name:</label>
        <input name="name" defaultValue="Enter Admin Name" ref={register} />

        <label>Email:</label>
        <input name="email" ref={register} />

        <label>upload Image:</label>
        <input type="file" name="image" onChange={handleImageUpload} />
        <br />

        <input type="submit" className='btn btn-info' />
      </form>
      </div>

    </div>
    );
};

export default AddAdmin;