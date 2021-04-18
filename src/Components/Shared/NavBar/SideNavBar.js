import { faCheckSquare, faHome, faPenSquare, faPlusSquare, faTasks, faThLarge, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../../App';

const SideNavBar = () => {
  const [user, setUser] = useContext(UserContext);
    const [isAdmin,setIsAdmin]=useState(false);

    useEffect(()=>{
       fetch('https://blooming-wave-41725.herokuapp.com/isAdmin',{
           method:'POST',
           headers: {
            'content-type': 'application/json'
          },
          body:JSON.stringify({email:user.email})
       }) 
       .then(res=>res.json())
       .then(data=>{
         console.log(data)
         setIsAdmin(data)})
    },[user.email])
    return (
        <div className="side-navBar">
        <Link to="/dashBoard"><FontAwesomeIcon icon={faThLarge} /> DashBoard</Link>
        {isAdmin?
          (<div>
        <Link to="/home"><FontAwesomeIcon icon={faPlusSquare} /> Add Services</Link>
        <Link to="addAdmin"><FontAwesomeIcon icon={faUserPlus} /> Make Admin</Link>
        <Link to="/manageService"><FontAwesomeIcon icon={faTasks} /> Manage Services</Link>
        </div>) :
        (<div>
        <Link to="/services"><FontAwesomeIcon icon={faCheckSquare} /> Book Service</Link>
        <Link to="/review"><FontAwesomeIcon icon={faPenSquare} /> Write a Review</Link>
        </div>)
        }
        <Link to="/home"><FontAwesomeIcon icon={faHome} /> Home</Link>

      </div>
    );
};

export default SideNavBar;