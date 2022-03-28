import React from 'react'
import { Container, Row, Col, Card} from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
function OurBrands() {
    AOS.init()
  return (
    <div>
            <Container className='pages-container' >
            <h1 className='text-center mt-5 mb-3'>Our Brands</h1>
            <Row>
                <Col md={4} className='pages-wraper'>
                <Card className='pages-card' data-aos='zoom-in' data-aos-duration='1000' data-aos-once='true'>
                <Card.Img variant="top" src="images/brand.png" />

                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card' data-aos='zoom-in' data-aos-duration='1000' data-aos-once='true'>
                <Card.Img variant="top" src="images/brand1.png" />

                </Card>
                </Col>
                <Col md={4} className='pages-wraper'>
                <Card  className='pages-card' data-aos='zoom-in' data-aos-duration='1000' data-aos-once='true'>
                <Card.Img variant="top" src="images/brand2.png" />

                </Card>
                </Col>  
            </Row>
            <Row>
            <Col md={6} className='pages-wraper'>
                <Card  className='pages-card' data-aos='zoom-in' data-aos-duration='1000' data-aos-once='true'>
                <Card.Img variant="top" src="images/brand3.png" />

                </Card>
                </Col>
                <Col md={6} className='pages-wraper'>
                <Card  className='pages-card' data-aos='zoom-in' data-aos-duration='1000' data-aos-once='true'>
                <Card.Img variant="top" src="images/brand4.png" />

                </Card>
                </Col> 
            </Row>
            </Container>
            <Footer />
    </div>
  )
}

export default OurBrands