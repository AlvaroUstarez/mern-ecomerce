import React, { useState , useEffect } from "react";
import { useDispatch , useSelector } from 'react-redux';
import { userRegister } from "../redux/actions/loginActions";
import { useNavigate } from "react-router-dom";
import { Nav, Navbar, Container, NavDropdown,Form, Button, Row, Col, FormGroup, FormLabel,Table} from 'react-bootstrap';


const ProfilePage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const usuario = useSelector((state) => state.userRegister);
    const { userAuth } = usuario;
    const [ name, setName ] = useState('');    
    const [ email, setEmail ] = useState(''); 
    const [ password, setPassword ]= useState('');
    
    const submitHandler=(event)=>{
        event.preventDefault()
    };

    return(
        <Row>
        <Col md={3}>
        <h2>Mi perfil</h2>
        <Form onSubmit={submitHandler}>
            <FormGroup controlId='name' className='mb-2'>
              <FormLabel>Nombre</FormLabel>
              <Form.Control
                type='name'
                placeholder='Ingrese su nombre'
                value={name}
                onChange={({target}) => setName(target.value)}
              ></Form.Control>
            </FormGroup>
            <FormGroup controlId='email' className='mb-2'>
              <FormLabel>Email</FormLabel>
              <Form.Control
                type='email'
                placeholder='Ingrese su email'
                value={email}
                onChange={({target}) => setEmail(target.value)}
                ></Form.Control>
            </FormGroup>
            <FormGroup controlId='password' className='mb-2'>
              <FormLabel>Constraseña</FormLabel>
              <Form.Control
                type='password'
                placeholder='Ingrese su contraseña'
                value={password}
                onChange={({target}) => setPassword(target.value)}
                ></Form.Control>
            </FormGroup>
            <Button type='submit' variant='primary'>Guardar Cambios</Button>
          </Form>
          </Col>
          </Row>
    );
}
export default ProfilePage