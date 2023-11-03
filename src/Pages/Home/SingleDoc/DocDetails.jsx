import React from 'react';
import { FaStar } from "react-icons/fa";
import { useParams } from 'react-router-dom';
import { Tab, TabList, TabPanel, Tabs } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import docDetails from "../../../../public/doctors.json";
const DocDetails = () => {

  const { id } = useParams();
  console.log(id);

  const info = docDetails.find((detail) => detail.id == id)

  return (
    <section className='container w-4/6 md:py-32
    '>

      <div className='flex gap-10 mx-auto'>

        <div>
          <div className='flex gap-5 '>
            <div>
              <img className='h-[200px] w-[200px]' src={info.img} alt="" />
            </div>

            <div className='text-start '>
              <button className="btn btn-sm mb-2 hover:bg-sky-200 bg-sky-200 mt-2">{info.specialty}</button>
              <div className='py-3'>
                <h2 className='card-title mt-1'>{info.name}</h2>
                <p className='flex items-center gap-1 my-1'><FaStar className='text-orange-500' /><span className='font-bold'>{info.avgRating}</span><span className='ms-1 text-gray-400'>({info.totalRating})</span></p>
              </div>
              <p className='text-gray-500 pt-3 w-2/3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
            </div>

          </div>


          <div className='md:pt-20 '>
            <Tabs>
              <TabList>
                <Tab>About</Tab>
                <Tab>FeedBack</Tab>
              </TabList>

              <div className='md:pt-10 '>
                <TabPanel>
                  <div>
                    <h2 className='text-lg'>About of <span className='text-primary font-extrabold ms-2 text-xl'>{info.name}</span></h2>

                    <p className='pt-5 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Distinctio facilis veritatis autem incidunt pariatur labore, rerum sunt laudantium voluptates nostrum ipsa error illo voluptatibus odit ipsam nemo ducimus, praesentium et.</p>

                    <div className='md:pt-10 '>

                      {/* <h1>Doctor's Educational Information</h1>
                      <ul>
                        {info?.map((doctor, index) => (
                          <li key={index}>
                            <strong>Doctor Name:</strong> {doctor.doctorName}
                            <ul>
                              {doctor.educationalInfo.map((education, subIndex) => (
                                <li key={subIndex}>
                                  <strong>Degree:</strong> {education.degree}<br />
                                  <strong>Year Completed:</strong> {education.yearCompleted}<br />
                                  <strong>Institution:</strong> {education.institution}
                                </li>
                              ))}
                            </ul>
                          </li>
                        ))}
                      </ul> */}
                      <div className='py-10'>
                        <p className='text-xl  font-extrabold pb-5'>{info.name}'s <span className='ms-2 text-black'>Education</span></p>
                        <ul className='text-gray-500 mb-5 '>
                          <span className='pb-20'>
                            {info?.educationalInfo.map((plot) => (
                              <li className='flex items-center justify-between gap-10 pb-6' key={plot.id}>
                                {plot.yearCompleted} <br />{plot.degree}
                                <div className='flex items-center text-pink-500 font-bold' >
                                  {plot.institution}
                                </div>
                              </li>
                            ))}
                          </span>

                        </ul>
                      </div>



                    </div>
                  </div>



                </TabPanel>

              </div>


              <div className='w-full'>
                <TabPanel>
                  <h2>Feedback content</h2>
                </TabPanel>
              </div>

            </Tabs>
          </div >


        </div >

        <div>
          <div className=' p-5 shadow-xl rounded-md'>
            <div className=' flex items-center justify-between gap-20'>
              <h1 className='text-gray-600 font-semibold'>Ticket Price</h1>
              <h1 className='font-extrabold  card-title'>{info.visitPrice}</h1>
            </div>

            <div >
              <h2 className='font-extrabold mt-10 pb-2 '>Available Time Slots:</h2>

              <ul className='text-gray-500'>
                {info?.visitingHours.map((slot) => (
                  <li className='flex items-center justify-between gap-10 py-1' key={slot.day}>
                    {slot.day}: <span className='font-bold'>{slot.hours}</span>
                  </li>
                ))}
              </ul>

            </div>
            <div className='text-center'>
              <button className='bg-primary text-white btn btn-wide mt-5 hover:bg-green-600 hover:text-white'>BOOK APPOINMENT</button>
            </div>
          </div>
        </div>
      </div >

    </section >
  );
};

export default DocDetails;