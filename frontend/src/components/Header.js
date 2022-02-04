import React from 'react';
import { Nav, Navbar, Container} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
import {ListProductPage} from '../pages/ListProductPage';
import {EditProductPage} from '../pages/ListProductPage';

const Header = () => {
  
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
            <LinkContainer to='/ListProductPage'>
                  <Nav.Link>
                    <i className='fas fa-user' ></i> Productos
                  </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/EditProductPage'>
                  <Nav.Link>
                    <i className='fas fa-user' ></i> Editar Productos
                  </Nav.Link>
                </LinkContainer>
              <LinkContainer to='/cart'>
                <Nav.Link>
                  <i className='fas fa-shopping-cart'></i>Carrito
                </Nav.Link>
                </LinkContainer>
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
                </LinkContainer>
        </Nav>
      </Navbar.Collapse>
    </Container> 
  </Navbar>
  </header> 
  ); 
};
export default Header;
