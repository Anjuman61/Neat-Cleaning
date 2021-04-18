import React from 'react';
import './HeadCover.css';
import cleaningPic from '../../../images/cleaning.PNG';
import { useHistory } from 'react-router';

const HeaderCover = () => {
    
const history = useHistory()

const handleClick=()=>{
    history.push('/services')
}
    return (
        <main style={{height:'600px'}} className='row d-flex align-items-center mb-5 headerCover'>
            <div className="col-md-4 offset-md-1 my-2 headerSide-text">
                <h1 style={{color:'white'}}>Want To Clean  <br/> Your Space?</h1>
                <p >Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, cum eos? Ea necessitatibus distinctio, sunt quibusdam fuga aut laborum, quasi adipisci deserunt obcaecati dignissimos eligendi?</p>
                <button className=" btn btn-info" onClick={handleClick}>Select A Service</button>

            </div>
            < div className="col-md-6 offset-md-1 my-2 HeaderSide-img">
               <img src={cleaningPic} alt="" className="img-fluid"/>
            </div>
            
        </main>
    );
};

export default HeaderCover;