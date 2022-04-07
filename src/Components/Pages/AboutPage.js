import React from 'react'
import { Container, Image } from 'react-bootstrap'
import Footer from '../Footer/Footer'
const AboutPage = () => {
  return (
    <div>
        <Container style={{marginTop:'10rem', justifyContent:'center', textAlign:'center', alignItems:'center'}}>
            <h1 className='text-center mt-3 mb-3'>ABOUT US</h1>
            <p className='card-text mt-5 mb-5'>
            <b>F</b>ormed in the year 1990, Soroup Trading has continued to expand its capabilities to become one among the leading Importer & Dsitributor for FMCG & Non-Food Products in the Kingdom of Saudi Arabia.
            In line with its dynamic growth, Soroup trading has decided to diverisfy its portfolio and enter the Industrial Trading & Contracting sector. Using our portfolio of brands to differentiate our services and consumer products, we seek to develop the most innovative and profitable experiennce to out clients.
            </p>
      <p>We have established a strong foothold in the market by
          introducing products of global standards from different
          parts of the world.</p>
        <p>Our well trained marketing personnel through its planned and
            scheduled network system help streamline the supplies to every
            nook and corner within the cities and their outskirts.</p>
          <p>The mission of our customer care division is to visit every customer at
                least once a week with a specialized team according to customer
                demand or queries</p>
        </Container>
        <Footer />  
    </div>

  )
}

export default AboutPage
