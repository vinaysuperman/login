//Navbar
import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';
import {useSelector,useDispatch } from 'react-redux';
import {logOut} from '../../Container/Redux/Action'; 
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    const state = useSelector(state=>state.name);
    const dispatch = useDispatch();
    const onClickLogOut=()=>{
        dispatch(logOut());
        props.history.push('/');
    }
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                <Navbar.Brand href="#home">Wild-Life</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">Welcome {state}</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link >
                        <Button variant="danger" onClick={onClickLogOut}>Log out</Button>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default withRouter(Navigation);