import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css';

function NavBar() {
  return (
    <header>

      <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">Mi tienda</Navbar.Brand>
            <Nav className="ms-auto">
              <Nav.Link href="#home">Tienda</Nav.Link>
              <Nav.Link href="#features">Contacto</Nav.Link>
            </Nav>
            <CartWidget/>
          </Container>
        </Navbar>
    </header>
  );
}

export default NavBar;