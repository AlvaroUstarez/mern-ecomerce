import React from "react";
import './Input.css'
const Input = () => {
    return (
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
    )
}