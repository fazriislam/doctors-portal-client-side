import React from 'react';
import Baby from './Baby';
import Banner from './Banner';
import Contact from './Contact';
import Footer from '../Shared/Footer';
import Info from './Info';
import MakeAppointment from './MakeAppointment';
import Services from './Services';
import Testimonials from './Testimonials ';

const Home = () => {
    return (
        <div>
            <Banner />
            <Info />
            <Services />
            <Baby />
            <MakeAppointment />
            <Testimonials />
            <Contact />
            <Footer />
        </div>
    );
};

export default Home;