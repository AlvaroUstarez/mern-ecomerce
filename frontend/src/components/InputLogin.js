import React from "react";

const Input = ({ attribute, handleChange, param }) => {
    return (
        
            <div class='mb-4'>
                            <label for='email' class='form-label'>Correo Electrónico</label>
                            <input type='email' class='form-control' name='email'></input>
                        </div>
        
    )
}

export default Input;