import { Container, Table, Row, Col } from "react-bootstrap";
import useCartStore from "../stores/cartStore";
function Carrito() {
  const { cart, eliminarProducto } = useCartStore();

  return (
    <Container className="w-100 d-flex flex-column justify-content-center">
      <h1 className="fw-bold">Carrito</h1>
      <Table className="w-50 p-2">
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Cantidad</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
            {
                cart.map((producto) => (
                    <tr key={producto.id}>
                        <td>{producto.nombre}</td>
                        <td>{producto.cantidad}</td>
                        <td>{producto.precio*producto.cantidad}</td>
                        <td><button className="btn btn-danger" onClick={() => eliminarProducto(producto.id)}>Eliminar</button></td>
                    </tr>
                ))
            }
        </tbody>
      </Table>
    </Container>
  );
}
export default Carrito;
