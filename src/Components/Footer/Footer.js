import React from 'react';
import './Footer.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Footer() {
  AOS.init();
  return (
  <div className='footer-container-bg' id="contact">
    <div className='footer-container'>
    <section className='footer-subscription' data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
      <img src='images/sorouplogo.png'  alt='logo'></img>
      <br></br>
        <p data-aos='fade-up' data-aos-duration='1000'  className='footer-subscription-heading'></p>
          SOROUP TRADING COMPANY LTD
          <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' className='footer-subscription-heading'></p>
          <p>Soroup tarding Co. Ltd</p>
          <i data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' className="fas fa-map-marked-alt"/>
          <p  data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' style={{ fontSize:'20px'}}>P.O. BOX 41233, Riyadh 11521<br></br>Kingdom saudi Arabia</p>
   
        <br></br>
        <i data-aos='fade-up' data-aos-duration='1000' data-aos-once='true' className="fas fa-mouse "  style={{color:'blue', fontSize:'30px'}}/>
        <p data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'  className='footer-subscription-heading'>info@soroup.com  |  soroup@gmail.com  <br></br> www.soroup.com</p>
        </section>
      <div className='footer-links'>
        <div className='footer-link-wrapper' >
          <div className='footer-link-items' data-aos='fade-up' data-aos-once='true' data-aos-duration='1000' >
          <h2>HEAD QUARTER</h2>
          <p>CENTERAL REGION, RIYADH</p>
            <a href='tel:+966 11 471 5432'><i className="fas fa-phone"/>&nbsp;+966 11 471 5432</a>
            <a href='tel:+966 11 471 5425'><i className="fas fa-phone"/>&nbsp;+966 11 471 5425</a>
          </div>
          <div className='footer-link-items' data-aos='fade-up' data-aos-duration='1000'data-aos-once='true' >
          <h2>WESTERN REGION</h2>
          <p>JEDDAH BRANCH OFFICE</p>
          <a href='tel:+966 12 290 2755'><i className="fas fa-phone"/>&nbsp;+966 12 290 2755</a>
          <a href='tel:+966 12 288 2691'><i className="fas fa-phone"/>&nbsp;+966 12 288 2691</a>
          </div>
        </div>
        <div className='footer-link-wrapper' data-aos='fade-up' data-aos-duration='1000' data-aos-once='true'>
          <div className='footer-link-items'>
          <h2>EASTERN REGION</h2>
          <p>DAMMANM BRANCH OFFICE</p>
          <a href='tel:+966 13 814 1028'><i className="fas fa-phone"/>&nbsp;+966 13 814 1028</a>
          <a href='tel:+966 13 814 1284'><i className="fas fa-phone"/>&nbsp;+966 13 814 1284</a>
          </div>
          <div className='footer-link-items'>
            <h2>NOTHERN REGION</h2>
            <p>HAIL BRANCH OFFICE</p>
            <a href='tel:+966 16 533 6455'><i className="fas fa-phone"/>&nbsp;+966 16 533 6455</a>
            <a href='tel:+966 16 533 0907'><i className="fas fa-phone"/>&nbsp;+966 16 533 0907</a>
          </div>
        </div>
      </div>
      <section >
          <div className='social-icons' data-aos-duration='1000' data-aos-once='true'>
          <small className='website-rights'>Website Design & SEO By - <a href='https://www.digicircal.com/' style={{textDecoration:'none', color:'blue',fontWeight:'600'}}>Digicircal</a> & <a href='https://www.softgenics.in' style={{textDecoration:'none', color:'blue',fontWeight:'600'}}>Sofgtenics</a></small>
          </div>
      </section>
    </div>
  </div>
  )
}
export default Footer;
