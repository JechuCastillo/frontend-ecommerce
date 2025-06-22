import useCartStore from "../stores/cartStore";
import { Button } from "react-bootstrap";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import useProductosStore from "../stores/productosStore";
import useAuthStore from "../stores/authStore";
function ProductoItem({ producto }) {
  const navigate = useNavigate();
  const { user } = useAuthStore();
  const location = useLocation();
  const { addProducto } = useCartStore();
  const { eliminarProducto, trigger, setTrigger } = useProductosStore();
  const handleClick = () => {
    if (!user) {
      navigate("/login");
      return;
    } else {
      const productoCarrito = {
        id: producto._id,
        nombre: producto.nombre,
        precio: producto.precio,
        cantidad: 1,
      };
      addProducto(productoCarrito);
    }
  };

  const handleClickEliminar = async () => {
    await eliminarProducto(producto.nombre);
    setTrigger(!trigger);
  };
  return (
    <tr id={producto._id} className="align-middle">
      <td>{producto.nombre}</td>
      <td>{producto.stock}</td>
      <td>{`$${producto.precio}`}</td>
      <td>
        {location.pathname === "/productos" ? (
          <Button
            onClick={() => {
              handleClick();
            }}
            className=""
          >
            Agregar al carrito
          </Button>
        ) : (
          <Button
            onClick={() => {
              handleClickEliminar();
            }}
            className="btn-danger"
          >
            Eliminar
          </Button>
        )}
      </td>
    </tr>
  );
}
export default ProductoItem;
