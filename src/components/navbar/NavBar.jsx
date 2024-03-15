import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import CartWidget from '../cartWidget/CartWidget';
import { NavLink } from 'react-router-dom';

function NavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={NavLink} to='/'>Ecomerce MotosAP</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Modelos" id="basic-nav-dropdown">   
              <NavDropdown.Item as={NavLink} to='/category/enduro'>Enduro</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/naked'>
                Naked
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={NavLink} to='/category/calle'>Calle</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <NavLink to='/cart' className="text-decoration-none">
            <CartWidget counter={15}/>
          </NavLink>
          
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;