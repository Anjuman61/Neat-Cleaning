import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Footer.css';
import FooterColumn from '../FooterColumn/FooterColumn';


const Footer = () => {
    
    const service = [
        {name: "Home Cleaning" , link: "/booking"},
        {name: "Office Cleaning" , link: "/booking"},
        {name: "Window Cleaning" , link: "/booking"},
        {name: "Deep cleaning" , link: "/booking"},
        {name: "Pest control" , link: "/booking"},
    ]
    const quickLink = [
        {name: "Home" , link: "/home"},
        {name: "Dashboard" , link: "/dashboard"},
        {name: "LogIn" , link: "/login"},
       
    ]
    const OurBlogs = [
        {name: "New cleaning Technology" , link: "/home"},
        {name: "Best Cleaning Products" , link: "/home"},
        {name: "Marketing Policy" , link: "/home"},
       
    ]
    const ContactUs = [
        {name: "876/2, Zakir hossain Road, Neat Cleaning tower, chittagong, Bangladesh" , link: "//google.com/map"},
        {name: "Call: +880-3865417583" , link: "/toNumber"},
        {name: "mail:programminghero001@gmail.com" , link: "/google.com"},
       
    ]
    return (
            <footer >
                <div className="container">
                    <div className="row">
                    <FooterColumn key={1} menuTitle="Our services" menuItems={service}/>
                    <FooterColumn key={2} menuTitle="Quick Link" menuItems={quickLink}/>
                    <FooterColumn key={3} menuTitle="read Our Blogs" menuItems={OurBlogs}/>
                    <FooterColumn key={4} menuTitle="Contact Us" menuItems={ContactUs}> 
                        <ul className="social-media list-inline">
                            <li className="list-inline-item"><a href="//facebook.com"><FontAwesomeIcon className="icon active-icon" icon={faFacebookF} /></a></li>
                            <li className="list-inline-item"><a href="//google.com"><FontAwesomeIcon className="icon" icon={faGooglePlusG} /></a></li>
                            <li className="list-inline-item"><a href="//instagram.com"><FontAwesomeIcon className="icon" icon={faInstagram} /></a></li>
                        </ul>
                    </FooterColumn>
                    </div>
                    <div className="copyRight text-center">
                    <p>Copyright {(new Date()).getFullYear()} All Rights Reserved</p>
                </div>
                </div>
            </footer>
    );
};

export default Footer;