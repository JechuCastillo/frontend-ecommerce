import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
import style from './styles/LayoutLogin.module.css'
function LayoutLogin() {
  return (
    <Container className={`${style["layout-login"]} my-5 border-0 w-50 shadow-sm`}>
      <Outlet></Outlet>
    </Container>
  );
}

export default LayoutLogin;
