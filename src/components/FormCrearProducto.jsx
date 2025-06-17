import { useState } from "react";
import useProductosStore from "../stores/productosStore";
import { Form, Button } from "react-bootstrap";
import { Toast } from "react-bootstrap";
function FormCrearProducto() {
  const { crearProducto } = useProductosStore();
  const [showToast, setShowToast] = useState(false);
  const [toastColor, setToastColor] = useState("success");
  const [toastMensaje, setToastMensaje] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const nombre = e.target[0];
    const stock = e.target[1];
    const precio = e.target[2];
    try {
      const producto = await crearProducto(
        nombre.value.trim(),
        stock.value,
        precio.value
      );
      if (producto.success) {
        setToastColor("success");
        setToastMensaje("Producto agregado con exito");
        setShowToast(true);
      } else {
        setToastColor("danger");
        setToastMensaje("Error al agregar el producto");
        setShowToast(true);
      }
      e.target.reset();
    } catch (error) {
      console.log("Error al agregar producto", error.message);
    }
  };
  return (
    <Form
      className="w-100 d-flex flex-column gap-3 justify-content-center m-auto shadow p-3"
      onSubmit={handleSubmit}
    >
      <h2 className="text-uppercase fw-bold text-center">
        Crear nuevo roducto
      </h2>
      <Form.Group>
        <Form.Label>Nombre del producto</Form.Label>
        <Form.Control type="text" placeholder="Nombre del producto" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Stock</Form.Label>
        <Form.Control type="number" placeholder="Stock" />
      </Form.Group>
      <Form.Group>
        <Form.Label>Precio</Form.Label>

        <Form.Control type="number" placeholder="Precio" />
      </Form.Group>
      <Button type="submit" className="btn btn-primary">
        Crear producto
      </Button>
      <div id="resultado">
        {}
        <Toast
          onClose={() => {
            setShowToast(false);
          }}
          show={showToast}
          delay={3000}
          autohide
          bg={toastColor}
        >
          <Toast.Body className="text-white">{toastMensaje}</Toast.Body>
        </Toast>
      </div>
    </Form>
  );
}

export default FormCrearProducto;
