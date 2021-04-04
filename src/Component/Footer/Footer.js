//footer component
import React from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Footer.module.css';

const Footer =(props)=>{
    return (
        <footer>
        <Container>
          <Row className="justify-content-md-center" style={{textAlign:"justify"}}>
            <Col>
            <h4>Legal</h4>
            <ul>
              <li>Legal</li>
              <li>Privacy Policy</li>
            </ul>
            </Col>
            <Col> 
            <h4>Community</h4>
            <ul>
              <li>Blog</li>
              <li>Newsletter</li>
            </ul>
            </Col>
            <Col> 
            <h4>Connect</h4>
            <ul>
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
            </ul>
            </Col>
          </Row>
        </Container>
      </footer>
    )
}

export default Footer;      