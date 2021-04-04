//Display the user login and user registration page

import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import background from '../../assets/image1.jpg';
import style from './Login.module.css';
import logo from '../../assets/logo.png';
import Form1 from '../../Component/Form/Form1'; //getting user login form component
import Form2 from '../../Component/Form/Form2'; //getting user regisration form
import Form3 from '../../Component/Form/Form3';  //getting submission done page
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

class Login extends Component {

    render() {
        return (
            <>
                <Container className={style.bakg}>
                    <Row className="justify-content-md-center">
                        <Col md={4} className={style.logBox}>
                            <div className={style.logImg}>
                                <img src={logo} alt="logo" />
                            </div>                           
                                <Route path='/' exact component={Form1} /> 
                                <Route path='/Register' exact component={Form2} />
                                <Route path='/Done' exact component={Form3} />
                        </Col>
                        <Col md={8} style={{
                            minHeight: "500px",
                            backgroundImage: `url(${background})`, backgroundSize: "cover",
                            borderRadius: " 0 10px 10px 0"
                        }}
                            className={style.bak}>
                            <div className="imgText">
                            
                            </div>
                        </Col>
                    </Row>
                </Container>
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
      authData: state,
    }
  }
  

  export default connect(mapStateToProps)(Login);
