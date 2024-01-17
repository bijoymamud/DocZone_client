import { useEffect, useState } from "react";
import SingleService from "../Services/SingleService";

const Services = () => {

  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/service')
      .then(res => res.json())
      .then(data => setServices(data))
  }, [])

  return (
    // <section className='md:py-32 pt-20'>
    //   <div className='container '>
    //     <div className='xl:w-[470px] mx-auto'>
    //       <h2 className='text-4xl text-center font-bold pb-3'>Our Medical Services</h2>
    //       <p className='w-5/6 text-center mx-auto text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
    //     </div>

    //     <div className="grid md:grid-cols-3 gap-20 text-center md:py-32 py-10">
    //       <div className="text-start">
    //         <h1 className="text-2xl font-extrabold">Cancer Care</h1>
    //         <span className='w-[90px] h-2 bg-yellow-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
    //         <p className="text-gray-500 pt-3 pb-5">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
    //         <div className="flex items-center justify-between">
    //           <Link to='/doctors'>
    //             <FaArrowAltCircleRight className=' text-2xl mt-3 ' />

    //           </Link>
    //           <div className="w-[44px] py-2 font-extrabold text-yellow-600 bg-yellow-200 rounded-sm text-center">1</div>
    //         </div>
    //       </div>

    //       <div className="text-start">
    //         <h1 className="text-2xl font-extrabold">Labor & Delivery</h1>
    //         <span className='w-[90px] h-2 bg-yellow-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
    //         <p className="text-gray-500 pt-3 pb-5">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
    //         <div className="flex items-center justify-between">
    //           <Link to='/doctors'>
    //             <FaArrowAltCircleRight className=' text-2xl mt-3 ' />

    //           </Link>
    //           <div className="w-[44px] py-2 font-extrabold text-purple-600 bg-purple-200 rounded-sm text-center">2</div>
    //         </div>
    //       </div>
    //       <div className="text-start">
    //         <h1 className="text-2xl font-extrabold">Heart & Vascular</h1>
    //         <span className='w-[90px] h-2 bg-yellow-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
    //         <p className="text-gray-500 pt-3 pb-5">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
    //         <div className="flex items-center justify-between">
    //           <Link to='/doctors'>
    //             <FaArrowAltCircleRight className=' text-2xl mt-3 ' />

    //           </Link>
    //           <div className="w-[44px] py-2 font-extrabold text-sky-600 bg-sky-200 rounded-sm text-center">3</div>
    //         </div>
    //       </div>

    //       <div className="text-start">
    //         <h1 className="text-2xl font-extrabold">Mental Health</h1>
    //         <span className='w-[90px] h-2 bg-yellow-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
    //         <p className="text-gray-500 pt-3 pb-5">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
    //         <div className="flex items-center justify-between">
    //           <Link to='/doctors'>
    //             <FaArrowAltCircleRight className=' text-2xl mt-3 ' />

    //           </Link>
    //           <div className="w-[44px] py-2 font-extrabold text-sky-600 bg-sky-200 rounded-sm text-center">4</div>
    //         </div>
    //       </div>

    //       <div className="text-start">
    //         <h1 className="text-2xl font-extrabold">Neurology</h1>
    //         <span className='w-[90px] h-2 bg-yellow-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
    //         <p className="text-gray-500 pt-3 pb-5">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
    //         <div className="flex items-center justify-between">
    //           <Link to='/doctors'>
    //             <FaArrowAltCircleRight className=' text-2xl mt-3 ' />

    //           </Link>
    //           <div className="w-[44px] py-2 font-extrabold text-yellow-600 bg-yellow-200 rounded-sm text-center">5</div>
    //         </div>
    //       </div>

    //       <div className="text-start">
    //         <h1 className="text-2xl font-extrabold">Burn Treatment</h1>
    //         <span className='w-[90px] h-2 bg-yellow-500 rounded-full block mt-[-12px] pb-2 mb-3'></span>
    //         <p className="text-gray-500 pt-3 pb-5">World-class care for everyone. Our health System offers unmatched, expert health care. From the lab to the clinic.</p>
    //         <div className="flex items-center justify-between">
    //           <Link to='/doctors'>
    //             <FaArrowAltCircleRight className=' text-2xl mt-3 ' />

    //           </Link>
    //           <div className="w-[44px] py-2 font-extrabold text-purple-600 bg-purple-200 rounded-sm text-center">6</div>
    //         </div>
    //       </div>

    //     </div>



    //   </div>


    // </section>

    <section className="container  md:my-20">

      <div className="grid md:grid-cols-3 gap-10 mx-auto ms-2 pt-10 ">
        {
          services.map(service => <SingleService key={service.id}
            service={service}>


          </SingleService>)
        }
      </div>
    </section>
  );
};

export default Services;