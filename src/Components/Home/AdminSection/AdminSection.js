import React, { useEffect, useState } from 'react';
import AdminCard from '../AdminCard/AdminCard';

const AdminSection = () => {
    const [admins, setAdmins] = useState([])
    useEffect( () => {
        fetch('https://glacial-castle-93985.herokuapp.com/admins')
        .then(res => res.json())
        .then(data => setAdmins(data))
    }, [])
    return (
        <section >
            <h5 className="text-center  text-info my-5">Our Admin Section</h5>
           <div>
           <div className="container">  
                <div className="row ">
                    {
                     admins.map(admin =><AdminCard key={admin._id} admin={admin} />)
                    }
                    
                </div>
            </div>
           </div>
        </section>
    );
};

export default AdminSection;