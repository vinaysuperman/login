//registration submission
import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import style from './Form3.module.css';

const Form3 = (props) => {
    const stateFname=useSelector(state=>state.fname);
    const stateLname=useSelector(state=>state.lname);

    return (
     <div className={style.top}>
         <div>
         Voila!!!
         <br />
         Thanks {stateFname } {stateLname} for Registering with us
         <br />
         <Link to="/"><span>Click here to login</span></Link>
         </div>
     </div>
    )
}

export default Form3;
