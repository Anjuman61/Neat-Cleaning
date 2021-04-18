import axios from 'axios';
import './AddServices.css';
import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import SideNavBar from '../../Shared/NavBar/SideNavBar';

const AddServices = () => {
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
        const newService = {
          name: data.name,
          description: data.description,
          pricing: data.price,
          imageURL: imageURL
        };
    
        const url = `https://glacial-castle-93985.herokuapp.com/addServices`;
    
        fetch(url, {
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(newService)
        })
          .then(res => {
            alert('submitted Successfully')
            console.log('server side response', res)})
      };
    return (
        <div className=" row">
     <div className='col-md-3'>
     <SideNavBar></SideNavBar>
     </div>
      <div className='col-md-12'>
      <form className='addServiceForm col-md-9' onSubmit={handleSubmit(onSubmit)}>
        <label>Service Title:</label>
        <input name="name" defaultValue="Enter title" ref={register} />

        <label>Description:</label>
        <input name="description" ref={register} />

        <label>Service pricing:</label>
        <input name="price" ref={register} />

        <label>upload Image:</label>
        <input type="file" name="image" onChange={handleImageUpload} />
        <br />

        <input type="submit" className='btn btn-info' />
      </form>
      </div>

    </div>
    );
};

export default AddServices;