import useCartStore from '../stores/cartStore'
import { Button } from "react-bootstrap";
function ProductoItem({ producto }) {
  const { addProducto } = useCartStore();
  const handleClick = () => {
    const productoCarrito = {
      id: producto._id,
      nombre: producto.nombre,
      precio: producto.precio,
      cantidad: 1,
    };
    addProducto(productoCarrito);
  };
  return (
    <tr id={producto._id} className="align-middle">
      <td>{producto.nombre}</td>
      <td>{producto.stock}</td>
      <td>{`$${producto.precio}`}</td>
      <td>
        <Button
          onClick={() => {
            handleClick();
          }}
          className=''
        >
          Agregar al carrito
        </Button>
      </td>
    </tr>
  );
}
export default ProductoItem;
