import { useEffect } from "react";
import useProductosStore from "../stores/productosStore";
import { Container } from "react-bootstrap";
import { Table } from "react-bootstrap";
import ProductoItem from "../components/ProductoItem";
function Productos() {
  const { productos, getProductos } = useProductosStore();
  useEffect(() => {
    const cargarProductos = async () => {
      await getProductos(); // Espera a que se completen los productos
    };
    cargarProductos();
  }, []);
  return (
    <>
      <Container className="w-100 p-4">
        <h1 className="fw-bold text-center">Listado de productos</h1>
        <Table className="w-100 text-center m-auto">
          <tbody>
            <tr>
              <th>Nombre</th>
              <th>Stock</th>
              <th>Precio</th>
              <th></th>
            </tr>
            {productos && productos.length > 0 ? (
              productos.map((producto) => (
                <ProductoItem
                  key={producto._id}
                  producto={producto}
                ></ProductoItem>
              ))
            ) : (
              <tr>
                <td>No hay productos</td>
              </tr>
            )}
          </tbody>
        </Table>
      </Container>
    </>
  );
}

export default Productos;
