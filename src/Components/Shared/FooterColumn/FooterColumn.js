import React from 'react';
import { Link } from 'react-router-dom';

const FooterColumn = (props) => {
    return (
        <div className='col-md-3'>
            <h6>{props.menuTitle}</h6>
            <ul className="list-unstyled mt-4">
                 {
                     props.menuItems.map((item, index) => <li key={index}><Link to={item.link} style={{color:'seagreen'}}>{item.name}</Link></li>)
                 }
                 {props.children && props.children}
            </ul>
        </div>
    );
};

export default FooterColumn;