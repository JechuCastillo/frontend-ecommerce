import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
function Navegacion() {
  const { logout, user } = useAuthStore();
  return (
    <Navbar expand="lg" className="custom-navbar" variant="dark">
      <Container className="justify-content-center">
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-between">
          <Nav className="align-items-center">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/productos">
              Productos
            </Nav.Link>
          </Nav>
          {user && (
            <Nav.Link as={Link} to="/login" onClick={() => logout()}>
              Cerrar sesión
            </Nav.Link>
          )}
          {!user && (
            <Nav.Link as={Link} to="/login">
              Iniciar sesión
            </Nav.Link>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
export default Navegacion;
