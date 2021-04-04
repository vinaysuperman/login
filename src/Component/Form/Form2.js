//user registration form
import React from 'react';
import Form from 'react-bootstrap/Form';
import style from './Form2.module.css';
import { useDispatch } from 'react-redux';
import { regDetail } from '../../Container/Redux/Action';
import { withRouter } from 'react-router-dom';


const Form2 = (props) => {
    const dispatch = useDispatch();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data1 = event.target[0].value;
        const data2 = event.target[2].value;
        dispatch(regDetail(data1,data2));
        props.history.push('/Done');
    }
    
    return (
        <>
            <div className={style.subtitle}>
                Kindly fill details to register
                            </div>
            <div className={style.inputField}>
                <Form style={{ margin: "10px auto" }} onSubmit={handleSubmit}>
                    <Form.Group >
                        <Form.Control type="text" placeholder="Enter name" name="fname" required />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="email" placeholder="Enter email" name="email" required />
                    </Form.Group>
                    <Form.Group >
                        <Form.Control type="password" placeholder="Password" required />
                    </Form.Group>
                    <button className={style.but}>Register</button>

                </Form>
            </div>
        </>
    )
}

export default withRouter(Form2);
