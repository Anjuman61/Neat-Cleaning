import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import AdminSection from '../AdminSection/AdminSection';
import CompanyInfo from '../CompanyInfo/CompanyInfo';
import Header from '../Header/Header';
import PricingPlan from '../PricingPlan/PricingPlan';
import Review from '../Review/Review';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <CompanyInfo></CompanyInfo>
            <Services></Services>
            <PricingPlan></PricingPlan>
            <Review></Review>
            <AdminSection></AdminSection>
            <Footer></Footer>
            
            
        </div>
    );
};

export default Home;