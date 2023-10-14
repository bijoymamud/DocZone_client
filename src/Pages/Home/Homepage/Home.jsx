import React from 'react';
import About from '../../About/About';
import Services from '../../Services/Services';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Faq />
    </div>
  );
};

export default Home;