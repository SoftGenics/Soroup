import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
function MideastProduct() {
  return (
    <div className='mideast-container-grocery'>
        <Container className='mideast-container'>
          <h1>Rice</h1>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Rice</h4>
                <Card.Img variant="top" src="images/mideast/Azeema-10kg-product.jpeg" />
                <Card.Body>
                    <Card.Title>Azeema Parboiled Rice</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Rice</h4>
                <Card.Img variant="top" src="images/mideast/podiyari-1-kg.jpg" />
                <Card.Body>
                    <Card.Title>Broken Rice</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Rice</h4>
                <Card.Img variant="top" src="images/mideast/rice--bags-2.jpg" />
                <Card.Body>
                    <Card.Title>Palakkadan Matta Rice</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Rice</h4>
                <Card.Img variant="top" src="images/mideast/jeerakasala.jpg" />
                <Card.Body>
                    <Card.Title>Jeerakasla Rice</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Rice</h4>
                <Card.Img variant="top" src="images/mideast/basmati-rice.jpg" />
                <Card.Body>
                    <Card.Title>Basmati Rice</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Rice</h4>
                <Card.Img variant="top" src="images/mideast/jeerakasala.jpeg" />
                <Card.Body>
                    <Card.Title>Sona Masoori Rice</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        </Container>
        <Footer />
    </div>
    
  )
}

export default MideastProduct
