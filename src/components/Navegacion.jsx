import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
function Navegacion() {
  const { logout } = useAuthStore();
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
          </Nav>
            
            <Nav.Link as={Link} to="/" onClick={() => logout()}>
              Cerrar sesión
            </Nav.Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegacion;
