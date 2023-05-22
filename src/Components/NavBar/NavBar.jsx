import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import '../NavBar/NavBar.css';
import { NavLink, Link } from "react-router-dom"

function NavBar() {
  return (
    <header>

      <Navbar bg="dark" variant="dark">
          <Container>
          <Link to={"/"} className='nombre' href="#home"> Mi tienda </Link>
            <Nav className="ms-auto">
                <li className='categorias'><NavLink to={`/categoria/1`} >Alacena</NavLink></li>
                <li className='categorias'><NavLink to={`/categoria/2`} >Heladera</NavLink></li>
                <li className='categorias'><NavLink to={`/categoria/3`} >Congelados</NavLink></li>
                <li className='categorias'><NavLink to={`/categoria/4`} >Frutos secos</NavLink></li>
            </Nav>
            <CartWidget/>
          </Container>
        </Navbar>
    </header>
  );
}

export default NavBar;