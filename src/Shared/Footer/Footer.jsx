import React from 'react';

const Footer = () => {
  return (
    <section className='footer__section'>
      <footer className="footer p-10 bg-slate-200 text-base-content footer__section">

        {/* <div>
          <img className='w-[250px]' src="https://i.ibb.co/WWLfs50/doczone-Logo.png" alt="" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos, omnis!

          </p>
        </div> */}

        <aside >
          <img className='w-[200px]' src="https://i.ibb.co/q7bW67r/Main-Doc-Zone-Logo.png" alt="" />
          <p className='pt-5 text-gray-500 font-extrabold' >DocZone Industries Ltd.<br />Providing reliable treatment since 1992</p>
        </aside>


        <nav>
          <header className="footer-title">Services</header>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <header className="footer-title">Company</header>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav>
          <header className="footer-title">Legal</header>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
    </section>
  );
};

export default Footer;