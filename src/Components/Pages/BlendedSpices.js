import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
function BlendedSpices() {
  return (
    <div className='mideast-container-bg'>
        <Container className='mideast-container'>
          <h1>Blended Spices</h1>
        <Row>
        <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Blended Spices</h4>
                <Card.Img variant="top" src="images/mideast/9.-Chilly.png" />
                <Card.Body>
                    <Card.Title>Chilly Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Blended Spices</h4>
                <Card.Img variant="top" src="images/mideast/11.-Corriander.png" />
                <Card.Body>
                    <Card.Title>coriander Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Blended Spices</h4>
                <Card.Img variant="top" src="images/mideast/8.-Cardamom.png" />
                <Card.Body>
                    <Card.Title>Cardamom Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Blended Spices</h4>
                <Card.Img variant="top" src="images/mideast/10.-Cinnamon.png" />
                <Card.Body>
                    <Card.Title>Cinnamon Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
              <h4>Blended Spices</h4>
                <Card.Img variant="top" src="images/mideast/17.-Kashmiri.png" />
                <Card.Body>
                    <Card.Title>Kashmiri Chilli Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Blended Spices</h4>
                <Card.Img variant="top" src="images/mideast/20.-Turmeric.png"/>
                <Card.Body>
                    <Card.Title>Turmeric Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
        <Footer />
    </div>
    
  )
}

export default BlendedSpices;