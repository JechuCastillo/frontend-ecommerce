import { Container ,Row,Col} from "react-bootstrap";
import FormCrearProducto from "../components/FormCrearProducto";
import EliminarProducto from "../components/EliminarProducto";
function Admin() {
  return (
    <Container className=" w-100 p-5 m-2 ">
      <h1 className="text-center text-1 fw-bold titulo-admin">Admin</h1>
        <Row>
          <Col>
            <FormCrearProducto></FormCrearProducto>
          </Col>
          <Col>
            <EliminarProducto></EliminarProducto>
          </Col>
        </Row>
    </Container>
  );
}
export default Admin;
