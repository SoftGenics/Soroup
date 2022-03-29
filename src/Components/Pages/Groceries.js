import React from 'react'
import { Container, Card, Row, Col } from 'react-bootstrap'
import './style.css'
import Footer from '../Footer/Footer'
function MideastProduct() {
  return (
    <div className='mideast-container-grocery'>
        <Container className='mideast-container'>
          <h1>Groceries Products</h1>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/CMP-1KG-product.jpg" />
                <Card.Body>
                    <Card.Title>Coconut Milk Powder</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/ASAFOETIDA.jpeg" />
                <Card.Body>
                    <Card.Title>COMPOUNDED ASAFOETIDA POWDER</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/CUBE-JAGGERY-new.png" />
                <Card.Body>
                    <Card.Title>Jaggery Cube</Card.Title>
                </Card.Body>
                </Card>
            </Col>
        </Row>
        <Row>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/Soya-ball.png" />
                <Card.Body>
                    <Card.Title>Soya Ball</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/Dried-red-chilli.png" />
                <Card.Body>
                    <Card.Title>Dried Red Chilli</Card.Title>
                </Card.Body>
                </Card>
            </Col>
            <Col sm={4} className='mideast-wraper'>
            <Card >
            <h4>Groceries</h4>
                <Card.Img variant="top" src="images/mideast/tamarind-1kg-seeded.jpg" />
                <Card.Body>
                    <Card.Title>Kerala Tamarind</Card.Title>
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
