import React from 'react'
import { Container} from 'react-bootstrap'
import './About.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

const About = () => {
    AOS.init();
    return (
        <div id="about">
        <Container className=' about-container' data-aos='fade-up' data-aos-duration='2000' data-aos-once='false'>

                <h1><span style={{color:'red'}}>ABOUT</span> US</h1>
                <p>We have established a strong foothold in the market by
introducing products of global standards from different
parts of the world.Our well trained marketing personnel through its planned and
scheduled network system help streamline the supplies to every
nook and corner within the cities and their outskirts.
                   The mission of our customer care division is to visit every customer at
least once a week with a specialized team according to customer
demand or queries <Link to="/About">Read More</Link></p>
        </Container>
        </div>
    )
}

export default About
