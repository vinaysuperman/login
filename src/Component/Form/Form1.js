// user login form
import React,{ useState } from 'react';
import Form from 'react-bootstrap/Form';
import style from './Form1.module.css';
import { Link } from 'react-router-dom';
import { useDispatch,useSelector } from 'react-redux';
import {userDetail} from '../../Container/Redux/Action';
import { withRouter } from 'react-router-dom';
 

const Form1 = (props) => {
    const [userName, setCount] = useState("");
    const [passWord, setPass] = useState("");
    const [authR, setAuth] = useState(false);
    const state=useSelector(state=>state.auth);
    const fname=useSelector(state=>state.fname);
    const pass=useSelector(state=>state.password);
    const dispatch = useDispatch();
    const handleSubmit=(event) =>{
        if(fname === userName && passWord === pass){
            dispatch(userDetail(userName))
        }      
        props.history.push('/');
        event.preventDefault();
        if(!state){
            setAuth(true);
        }
      }

    const handleChangeU=(event)=>{   
        const userName= event.target.value;
        setCount(userName);
        setAuth(false);
    } 
    const handleChangeP=(event)=>{   
        const passWord= event.target.value;
        setPass(passWord);
        setAuth(false);
    }   
    return (
        <> 
            <div className={style.subtitle}>
                Use your credential to login
                            </div>
            <div className={style.inputField}>
                <Form style={{ margin: "10px auto" }} onSubmit={(e)=>{handleSubmit(e)}}>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Username" name="Username" onChange={handleChangeU} required/>
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Password" onChange={handleChangeP}  required/>
                    </Form.Group>
                    {authR?<p>Invalid credentials</p>:null}
                    <button className={style.but} type="submit">Login</button>
                    <Form.Text style={{ textAlign: "center" }}>
                        Not registerd? 
                        <Link to="/Register" id="a"><span> Create an account</span></Link>
                    </Form.Text>
                </Form>
                </div>  
        </>
    )
}

export default withRouter(Form1);
