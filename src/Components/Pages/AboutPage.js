import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
const AboutPage = () => {
  return (
    <div>
        <Container style={{marginTop:'10rem', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
            <h1 className='text-center mt-3 mb-3'>ABOUT US</h1>
            <Image fluid src="images/sorouplogo.png" style={{width:'30rem'}}></Image>
            <p className='card-text mt-5 mb-5'>
            <b>F</b>ormed in the year 1990, Soroup Trading has continued to expand its capabilities to become one among the leading Importer & Dsitributor for FMCG & Non-Food Products in the Kingdom of Saudi Arabia.
            In line with its dynamic growth, Soroup trading has decided to diverisfy its portfolio and enter the Industrial Trading & Contracting sector. Using our portfolio of brands to differentiate our services and consumer products, we seek to develop the most innovative and profitable experiennce to out clients.
            </p>
        </Container>
        <Footer />  
    </div>

  )
}

export default AboutPage