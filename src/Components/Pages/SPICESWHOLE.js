import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
function BlendedSpices() {
  return (
    <div className='mideast-container-bg'>
        <Container className='mideast-container'>
          <h1>Spices Whole</h1>
        <Row>
        <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Spices Whole</h4>
                <Card.Img variant="top" src="images/mideast/greencardamom.jpg" />
                <Card.Body>
                    <Card.Title> Green Cardamom</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Spices Whole</h4>
                <Card.Img variant="top" src="images/mideast/cashewnut.jpg" />
                <Card.Body>
                    <Card.Title> Cashew</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Spices Whole</h4>
                <Card.Img variant="top" src="images/mideast/cinnamonstick.jpg" />
                <Card.Body>
                    <Card.Title>Cinnamon Sticks</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Spices Whole</h4>
                <Card.Img variant="top" src="images/mideast/cloves.jpg" />
                <Card.Body>
                    <Card.Title>Clove</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
              <h4>Spices Whole</h4>
                <Card.Img variant="top" src="images/mideast/saffron.png" />
                <Card.Body>
                    <Card.Title>Saffron</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Spices Whole</h4>
                <Card.Img variant="top" src="images/mideast/pepper-whole.png" />
                <Card.Body>
                    <Card.Title>Black Pepper Whole</Card.Title>
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