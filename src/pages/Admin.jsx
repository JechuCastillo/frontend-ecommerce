import {Container } from "react-bootstrap";
import FormCrearProducto from "../components/FormCrearProducto";
function Admin() {
  
  return (
    <Container className=" w-100 p-5 m-2 ">
      <h1 className="text-center text-1 fw-bold titulo-admin">Admin</h1>
      <FormCrearProducto></FormCrearProducto>
    </Container>
  );
}
export default Admin;
