
import About from '../About/About';
import Banner from '../Banner/Banner';
import Faq from '../Faq/Faq';
import Features from '../Features/Features';
import OurDoctors from '../OurDoctors/OurDoctors';
import Review from '../Review/Review';
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
      <Review />
    </div>
  );
};

export default Home;