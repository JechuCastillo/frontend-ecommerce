import Container from "react-bootstrap/esm/Container";
import { Outlet } from "react-router-dom";
function LayoutLogin() {
  return (
    <Container className="my-5 border-0 w-50 p-5 py-50 shadow-sm">
      <Outlet></Outlet>
    </Container>
  );
}

export default LayoutLogin;
