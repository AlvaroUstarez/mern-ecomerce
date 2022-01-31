import React from 'react';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
  return (
   <header>
      <Navbar bg='dark' variant='dark' expend='lg' collapseOnSelect>
    <Container>
      <LinkContainer to='/'>
        <Navbar.Brand>TiendaVirtual</Navbar.Brand>
      </LinkContainer>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ms-auto'>
          
        </Nav>
      </Navbar.Collapse>
    </Container> 
  </Navbar>
  </header>
  ); 
};
export default Header;
