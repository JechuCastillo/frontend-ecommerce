import { Button, Container } from "react-bootstrap";
import Navegacion from "./Navegacion";
import { Outlet, useNavigate, Link } from "react-router-dom";
import style from "./styles/Layout.module.css";
function Layout() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate("/admin");
  };
  return (
    <>
      <header>
        <Navegacion></Navegacion>
      </header>
      <main>
        <Container className="w-100 d-flex justify-content-end">
          <Button className="mx-2 mb-2 mt-2" onClick={handleClick}>
            Admin
          </Button>
          <Button className="mx-2 mb-2 mt-2" onClick={() => navigate("/carrito")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="20"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="icon icon-tabler icons-tabler-filled icon-tabler-shopping-cart"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M6 2a1 1 0 0 1 .993 .883l.007 .117v1.068l13.071 .935a1 1 0 0 1 .929 1.024l-.01 .114l-1 7a1 1 0 0 1 -.877 .853l-.113 .006h-12v2h10a3 3 0 1 1 -2.995 3.176l-.005 -.176l.005 -.176c.017 -.288 .074 -.564 .166 -.824h-5.342a3 3 0 1 1 -5.824 1.176l-.005 -.176l.005 -.176a3.002 3.002 0 0 1 1.995 -2.654v-12.17h-1a1 1 0 0 1 -.993 -.883l-.007 -.117a1 1 0 0 1 .883 -.993l.117 -.007h2zm0 16a1 1 0 1 0 0 2a1 1 0 0 0 0 -2zm11 0a1 1 0 1 0 0 2a1 1 0 0 0 0 -2z" />
            </svg>
          </Button>
        </Container>
        <Outlet></Outlet>
      </main>
      <footer className={`${style["footer"]}`}>
        <p className={style["footer-parrafo"]}>
          Jesus Castillo, todo los derechos reservados ©2025
        </p>
      </footer>
    </>
  );
}
export default Layout;
