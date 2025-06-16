import {Container } from "react-bootstrap";
import FormCrearProducto from "../components/FormCrearProducto";
import EliminarProducto from "../components/EliminarProducto";
function Admin() {
  
  return (
    <Container className=" w-100 p-5 m-2 ">
      <h1 className="text-center text-1 fw-bold titulo-admin">Admin</h1>
      <FormCrearProducto></FormCrearProducto>
      <EliminarProducto></EliminarProducto>
    </Container>
  );
}
export default Admin;
