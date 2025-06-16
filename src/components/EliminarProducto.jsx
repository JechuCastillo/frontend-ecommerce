import { Container, Form, Button } from "react-bootstrap";
import useProductosStore from "../stores/productosStore";
function EliminarProducto() {
  const { eliminarProducto } = useProductosStore();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      if (!e.target[0].value) {
        document.querySelector(".resultado").innerHTML =
        "Ingrese el nombre del producto";
        return;
      }
      const producto = await eliminarProducto(e.target[0].value);
      e.target[0].value = "";
      if (producto.success) {
        document.querySelector(".resultado").innerHTML =
        "Producto eliminado con exito";
      } else {
        document.querySelector(".resultado").innerHTML =
        "Error al eliminar el producto";
      }
    }catch(error){
     document.querySelector(".resultado").innerHTML =
        "Error al eliminar el producto";
      console.log(error);
    }
  };
  return (
    <Container className="w-50 p-4 shadow">
      <h2 className="text-center fw-bold text-uppercase">Eliminar Producto</h2>
      <Form className="d-flex flex-column gap-3" onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre del producto</Form.Label>
          <Form.Control
            type="text"
            placeholder="Ingrese el nombre del producto"
          />
        </Form.Group>
        <Button type="submit" className="btn btn-danger">Eliminar</Button>
      </Form>
      <div className="resultado text-center fw-bold fs-5 mt-3"></div>
    </Container>
  );
}
export default EliminarProducto;
