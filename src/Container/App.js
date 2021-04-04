//In this page react will check the status of authentication if true it will display 
// landing page otherwise it will display login page

import React,{Component} from 'react';
import './App.css';
import LandingPage from '../Component/LandingPage/LandingPage'; //landing page component
import Login from './Login/Login';  // login Home page component
import { connect } from 'react-redux';

class App extends Component{
  
  render(){
    const auth=this.props.authData.auth; //getting authentication status by default false
    const login=(                        // login Home page component
      <div className="App"><Login/></div>
    )
    const landing=(
      <div className="App2"><LandingPage/></div>  //landing page component
    )
    return (
      <>
      {auth ? landing : login }
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    authData: state,
  }
}

export default connect(mapStateToProps)(App);
