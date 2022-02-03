import React , { useEffect } from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import { useDispatch, useSelector} from 'react-redux';
import { login } from '../services/userService';

const Header = () => {
  
  const usuario = useSelector((state) => state.userLogger);
  const { error, userAuth } = usuario;
  
  
  //render(){       
    return (
    <header>
        <Navbar bg='dark' variant='dark' expand='lg' collapseOnSelect>
          <Container>
            <LinkContainer to='/'>
              <Navbar.Brand>TiendaVirtual</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
              <Nav className='ms-auto'>
                <LinkContainer to='/cart'>
                  <Nav.Link>
                    <i className='fas fa-shopping-cart'></i>Carrito
                  </Nav.Link>
                </LinkContainer>
                {
                  userAuth ? (
                    <ul class="navbar-nav me-auto">
                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Usuario</a>
                        <div class="dropdown-menu">
                          <a class="dropdown-item" href="#">Perfil</a>
                          <div class="dropdown-divider"></div>
                          <a class="dropdown-item" href="#">Cerrar Sesion</a>
                        </div>
                      </li>
                      </ul>
                   ): (
                     <LinkContainer to='/Login'>
                           <Nav.Link>
                             <i className='fas fa-user' ></i> Login
                           </Nav.Link>
                         </LinkContainer>
               
                   )}
                
          </Nav>
        </Navbar.Collapse>
      </Container> 
    </Navbar>
    </header> 
    ); 
 //}
};
export default Header;
