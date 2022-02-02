import React, { useState } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { userRegister } from "../redux/actions/loginActions";

const RegisterPage = () => {

    const dispatch = useDispatch();

    //const usuario = useSelector((state) => state.usuario);
    //const { loading, userLogger } = usuario;
    const [ name, setName ] = useState('');    
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ]= useState('');
    
    const handleSubmit=(event)=>{
        event.preventDefault()
       dispatch(userRegister(name, email , password,))
    }

    return (
        <>
        <div className='container'>
            <div className='row'>
                <div className='col'>
                    <h1>Registro Usuario</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-4'>
                            <label htmlFor='name' className='form-label'>Name</label><br/>
                            <input 
                                type='text' 
                                value={name}
                                name='name'
                                placeholder='name'
                                onChange={({target}) => setName(target.value)} 
                            ></input>
                        </div>
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
                            <button type='submit' className='btn btn-primary'>Crear Cuenta</button>
                        </div>
                        <div className='my-3'>
                            <span>ya tienes cuenta?<a href='/Login'>Iniciar Sesion</a></span> <br/>
                        </div>
                    </form>   
                    </div>
                <div className='col'></div>
            </div>
        </div>
        </>
    )       
};


export default RegisterPage;