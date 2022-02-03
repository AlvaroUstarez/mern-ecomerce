import React, { useState, useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { userlogin } from "../redux/actions/loginActions";
import Message from '../components/Message';
import { useNavigate } from "react-router-dom";
import toast from 'react-hot-toast';

const LoginPage = () => {

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const usuario = useSelector((state) => state.userLogger);
    const { error, userAuth } = usuario;
    
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ]= useState(''); 
    
    const handleSubmit=(event)=>{
        event.preventDefault()
       dispatch(userlogin(email, password))
    }

    useEffect(() => {
        if (userAuth) {
           navigate("/");
        }
        if (error) {
          toast.error(Message);  
        }
        }, [error,userAuth]);//no funca

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Iniciar Sesión</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='email' className='form-label'>Correo Electrónico</label><br/>
                            <input 
                                type='text' 
                                value={email}
                                name='email'
                                placeholder='email'
                                onChange={({target}) => setEmail(target.value)} 
                            ></input>
                        </div>
                        <div className='mb-4'>
                            <label htmlFor='password' className='form-label'>Password</label><br/>
                            <input 
                                type='password' 
                                value={password}
                                name='password'
                                placeholder='password'
                                onChange={({target}) => setPassword(target.value)} 
                            ></input>
                        </div>
                        <div className='d-grid'>
                            <button type='submit' className='btn btn-primary'>Iniciar Sesion</button>
                        </div>
                        <div className='my-3'>
                            <span>Eres un usuario Nuevo?<a href='/Register'>Registrate</a></span> <br/>
                            <span><a href='#'>Recupear Password</a></span>
                        </div>
                    </form>   
                    </div>
                <div className='col'></div>
            </div>
        </div>
        </>
    )     
};


export default LoginPage;