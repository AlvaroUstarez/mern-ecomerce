import React from 'react';
import { Nav, Navbar, Container, NavDropdown,} from 'react-bootstrap';
import {LinkContainer} from 'react-router-bootstrap';
//import {ListProductPage, EditProductPage} from '../pages/ListProductPage';
import { useDispatch , useSelector } from 'react-redux';
import { logout } from '../redux/actions/loginActions';

const Header = () => {
  const dispatch = useDispatch(); 
  const usuario = useSelector((state) => state.userLogger);
  const {userAuth } = usuario;

  const cerrarSesion = () => {
    dispatch(logout());
  };
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
                {userAuth ? (
                <NavDropdown title={userAuth.name} id='username'>
                  <LinkContainer to='/profile'>
                    <NavDropdown.Item>Perfil</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={cerrarSesion}>
                    Cerrar Sesión
                  </NavDropdown.Item>
                  
                  {userAuth && userAuth.isAdmin && (<LinkContainer to='#'>
                    <NavDropdown.Item>Usuarios</NavDropdown.Item>
                  </LinkContainer>)
                  }
                  {userAuth && userAuth.isAdmin && (<LinkContainer to='/admin/productlist'>
                    <NavDropdown.Item>Productos</NavDropdown.Item>
                  </LinkContainer>)
                  }
                  {userAuth && userAuth.isAdmin && (<LinkContainer to='#'>
                    <NavDropdown.Item>Ventas</NavDropdown.Item>
                  </LinkContainer>)
                  }
                </NavDropdown>
              ) : (
                <LinkContainer to='/login'>
                  <Nav.Link>
                    <i className='fas fa-user'></i> Login
                  </Nav.Link>
                </LinkContainer>
              )}
        </Nav>
      </Navbar.Collapse>
    </Container> 
  </Navbar>
  </header> 
  ); 
};
export default Header;
