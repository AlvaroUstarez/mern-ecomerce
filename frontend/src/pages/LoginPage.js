import React, { useEffect, useState } from "react";
import { Col, Row} from 'react-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import Loader from '../components/Loader';
import Message from '../components/Message';
//import Label from '../components/labelLogin';
import Input from '../components/InputLogin';
import { userlogin } from "../redux/actions/loginActions";

const LoginPage = () => {
    const dispatch = useDispatch();
    //const productList = useSelector((state) => state.product);
    
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ]= useState(''); 
    console.log(email, password);
    
    const handleSubmit=(event)=>{
        event.preventDefault()
       dispatch(userlogin(email, password))
        console.log(':"(')
    }

    return (
        <>
        <div class='container'>
            <div class='row'>
                <div class='col'>
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <div class='mb-4'>
                            <label for='email' class='form-label'>Correo Electrónico</label><br/>
                            <input 
                                type='text' 
                                value={email}
                                name='email'
                                placeholder='email'
                                onChange={(target) => setEmail(target.value)} 
                            ></input>
                        </div>
                        <div class='mb-4'>
                            <label for='password' class='form-label'>Password</label><br/>
                            <input 
                                type='password' 
                                value={password}
                                name='password'
                                placeholder='password'
                                onChange={({target}) => setPassword(target.value)} 
                            ></input>
                        </div>
                        <div class='d-grid'>
                            <button type='submit' classEmail='btn btn-primary'>Iniciar Sesion</button>
                        </div>
                        <div class='my-3'>
                            <span>Eres un usuario Nuevo?<a href='#'>Registrate</a></span> <br/>
                            <span><a href='#'>Recupear Password</a></span>
                        </div>
                    </form>   
                    </div>
                <div class='col'></div>
            </div>
        </div>
        
        </>
    )    
};

export default LoginPage;