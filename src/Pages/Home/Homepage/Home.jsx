import React from 'react';
import Services from '../../Services/Services';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Features />
      <Faq />
    </div>
  );
};

export default Home;