import React from 'react'
import { Container } from 'react-bootstrap'
import Footer from '../Footer/Footer'
const AboutPage = () => {
  return (
    <>
    <div style={{padding:'4rem'}}>
        <Container style={{marginTop:'10rem',boxShadow:'0px 0px 8px black', padding:'3rem'}}>
        <h1 className='mt-3 mb-3 text-center' ><span style={{color:'red'}} >ABOUT</span> US</h1>
          <p>We have established a strong foothold in the market by
          introducing products of global standards from different
          parts of the world.
          
          Our well trained marketing personnel through its planned and
              scheduled network system help streamline the supplies to every
              nook and corner within the cities and their outskirts.
              The mission of our customer care division is to visit every customer at
              least once a week with a specialized team according to customer
              demand or queries</p>
              <p>A major element to our competitive strength is our
sales and distribution strategy anchored by our
best-in-class sales team.</p>
<p>Our well established distribution network will ensure that
our products are well delivered and displayed on time at
every outlets.</p>
<p>ur facilities are capable of meeting the delivery requirements
of diversified customer base ranging from Hyper Markets, Super
Markets, A. B and C class markets. Wholesalers. Catering Companies.
Restaurants, Hotels and Compound outlets etc.</p>
<p>A major element to our competitive strength is our
sales and distribution strategy anchored by our
best-in-class sales team.</p>
<p>Our well established distribution network will ensure that
our products are well delivered and displayed on time at
every outlets.
Our facilities are capable of meeting the delivery requirements
of diversified customer base ranging from Hyper Markets, Super
Markets, A. B and C class markets. Wholesalers. Catering Companies.
Restaurants, Hotels and Compound outlets etc.</p>
        </Container>
 
    </div>
    <Footer /> 
    </>
  )
}

export default AboutPage
