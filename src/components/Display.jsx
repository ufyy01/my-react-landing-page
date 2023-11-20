import React from 'react';
import Navbar from './Navigation/Navbar';
import Footer from './Footer/Footer';
import Header from '../components/Header/Header';
import Services from './Services/Services';
import Moreservices from './Moreservices/Moreservices';
import Testimonals from './Testimonials/Testimonials';
import Blog from './Blog/Blog';
import '../App.css';

const Display = () => {

    return ( 
    <div>
            <Navbar />
            <Header />
            <Services />
            <Moreservices />
            <Testimonals />
            <Blog />
            <Footer />
    </div> 
    );
}

export default Display;