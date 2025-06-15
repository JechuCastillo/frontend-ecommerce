import { Button } from "react-bootstrap";
import Navegacion from "./Navegacion";
import { Outlet, useNavigate } from "react-router-dom";
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
        <Button className="float-end  mx-2 mb-2 mt-2" onClick={handleClick}>
          Admin
        </Button>
        <Outlet></Outlet>
      </main>
      <footer className="width-100">
        <p>Jesus Castillo, todo los derechos reservados ©2025</p>
      </footer>
    </>
  );
}
export default Layout;
