import React, {useState} from 'react'
import { Navbar, Nav, Container,NavDropdown } from 'react-bootstrap'
import './Header.css'
import { Link } from 'react-router-dom'

function Header() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
    //navbar color change on scroll

    const [color, setcolor] = useState(false)
    const changeColor = () => {
        if(window.scrollY >= 90) {
            setcolor(true)
        } else {
            setcolor(false)
        }
    }
    window.addEventListener("scroll", changeColor)
  return (
 <div>
      <Navbar collapseOnSelect expand="lg" fixed="top" className={color ? "navbar navbar-bg ": "navbar"}>
        <Container fluid>
        <Navbar.Brand className={color ? "navbar img navbar-size img" : "navbar img "}><Link to='/' eventKey={2} ><img src='/images/sorouplogo.png' alt='logo'/></Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" onClick={handleClick}><i className={click ? 'fas fa-times' : 'fas fa-bars' } style={{color:'red',transform:'Scale(1.3)'}}/></Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto mb-2 mb-lg-0">
            <Nav.Link as={Link} to="/" eventKey={2} onClick={closeMobileMenu}>HOME</Nav.Link>
            <Nav.Link as={Link} to="/Brands" eventKey={2} onClick={closeMobileMenu}>OUR BRAND</Nav.Link>
            <Nav.Link as={Link} to="/Products" eventKey={2} onClick={closeMobileMenu}>OUR PRODUCTS</Nav.Link>
            <NavDropdown title="OUR SERVICES" id="collasible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/import_and_distributor" eventKey={2} onClick={closeMobileMenu}>IMPORTER AND DISTRIBUTOR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/trading_and_contracting" eventKey={2} onClick={closeMobileMenu}>TRADING AND CONTRACTING</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link as={Link} to="/About" eventKey={2} onClick={closeMobileMenu}>ABOUT US</Nav.Link>
            <Nav.Link  href="#contact" onClick={closeMobileMenu}>CONTACT US</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>

  )
}

export default Header