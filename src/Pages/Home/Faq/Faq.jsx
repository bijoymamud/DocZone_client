

const Faq = () => {
  return (
    <section className="container py-10 ">
      <div >
        <h1 className="text-4xl mb-10 text-center font-extrabold">Frequently Ask Question</h1>
        <div className=" md:flex items-center justify-between container mx-auto gap-5  py-10 p-5">
          <div className="w-full mb-10 md:mb-0">
            <img
              className="w-1/2 mx-auto relative"
              src="https://cdn-icons-png.flaticon.com/512/4403/4403555.png"
              alt=""
            />
          </div>

          <div className=" w-full space-y-4 ">
            <div className="border   px-5 shadow-md rounded-md shadow-cyan-500/50">
              <details>
                <summary className="py-2 outline-none cursor-pointer text-lg  ">
                  What is DocZone & how does it work?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" ">
                    <span className="font-semibold ">DocZone</span> is an online platform that allows users to book doctor appointments conveniently. Users can browse through a list of healthcare providers, choose a doctor, select an available time slot, and book an appointment from the comfort of their home or office.
                  </p>
                </div>
              </details>
            </div>

            <div className="border  shadow-cyan-500/50  px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
               text-lg"
                >
                  Is DocZone available 24/7 for booking appointments?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" ">
                    Yes, you can access DocZone and book appointments 24/7, making it convenient for users with busy schedules.
                  </p>
                </div>
              </details>
            </div>

            <div className="border shadow-cyan-500/50  px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
               text-lg"
                >
                  Is my personal and medical information secure on DocZone?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" ">
                    We take data security seriously. DocZone employs stringent security measures to protect your personal and medical information, and we adhere to strict privacy regulations.
                  </p>
                </div>
              </details>
            </div>

            <div className="border shadow-cyan-500/50  px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
                text-lg"
                >
                  How do I pay for my appointment on DocZone?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" ">
                    Payment methods may include credit/debit cards, digital wallets, or insurance billing, depending on the healthcare provider's preferences and policies.
                  </p>
                </div>
              </details>
            </div>
            <div className="border shadow-cyan-500/50  px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
                text-lg"
                >
                  What if I have technical issues while booking an appointment?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" ">
                    If you encounter technical problems, you can usually reach out to customer support for assistance through the platform.
                  </p>
                </div>
              </details>
            </div>
            <div className="border shadow-cyan-500/50  px-5 shadow-md rounded-md">
              <details>
                <summary
                  className="py-2 outline-none cursor-pointer 
                text-lg"
                >
                  Is there a fee for using the online appointment service?
                </summary>
                <div className="px-4 pb-4">
                  <p className=" ">
                    There may be a service fee or a booking fee associated with using the platform, so it's essential to check the terms and conditions.
                  </p>
                </div>
              </details>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;