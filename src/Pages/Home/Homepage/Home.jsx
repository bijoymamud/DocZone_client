
import About from '../About/About';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import OurDoctors from '../OurDoctors/OurDoctors';
import Services from '../Services/Services';

const Home = () => {
  return (
    <div>
      <Banner />
      <About />
      <Services />
      <Features />
      <OurDoctors />
      <Faq />
    </div>
  );
};

export default Home;