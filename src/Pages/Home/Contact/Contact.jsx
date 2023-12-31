import React, { useRef } from 'react';
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { HiRocketLaunch } from "react-icons/hi2";

const Contact = () => {
  const form = useRef();
  return (
    <div className="min-h-[50vh]  container mx-auto p-5 py-36">


      <div className="md:grid grid-cols-2 gap-10 items-center pt-3 space-y-5">
        <div className="w-full md:gap-20">
          <form
            data-aos="fade-down"
            data-aos-duration="1000"
            ref={form}
            // onSubmit={sendEmail}
            className="pb-5 border-2 shadow-md  rounded-lg md:pt-20 card-body"
          >
            <div className="">
              <div className="form-control">
                <label className="label">
                  <p className="">Name</p>
                </label>
                <input
                  required
                  name="name"
                  type="text"
                  placeholder="Name"
                  className="outline outline-1 input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="">Email</p>
                </label>
                <input
                  required
                  name="email"
                  type="email"
                  placeholder="Email"
                  className="outline outline-1 input"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="">Message</p>
                </label>
                <textarea
                  required
                  name="message"
                  className="outline outline-1 textarea"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="mt-6">
                <button className=" btn hover:-translate-y-1 btn-primary">
                  <span>Send Message</span><HiRocketLaunch></HiRocketLaunch>
                </button>
                {/* <p className="z-20 mt-3 ">{msg}</p> */}
              </div>

            </div>
          </form>
        </div>
        <div className="md:w-3/4 md:ms-10">
          <div className="mb-10">
            <h1 className="border-l-8 border-teal-600 text-3xl font-semibold ps-5 mb-3">
              Contact Our <br /> Team
            </h1>
            <p className='text-gray-500'>
              If you have any specific questions or need to reach out for
              support, you can try sending an email.
            </p>
          </div>
          <div className="space-y-5 text-gray-500">
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-black" />
              <p>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaPhoneAlt className="text-3xl text-black" />
              <p>
                +880 1234567890 <br /> +8802364786732
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-black" />
              <p>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-3xl text-black" />
              <p>
                Dhanmondi-32, Dhaka <br /> Bangladesh
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;