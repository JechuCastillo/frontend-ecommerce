import { create } from "zustand";
const useProductosStore = create((set) => ({
  productos: [],
  trigger: false,

  setTrigger: () => {
    set((state) => ({ trigger: !state.trigger }));
  },
  getProductos: async () => {
    try {
      const productosFetch = await fetch(
        "http://localhost:3000/api/productos",
        { method: "GET", credentials: "include" }
      );
      const productosJson = await productosFetch.json();
      set({ productos: productosJson.data });
      return productosJson.data;
    } catch (error) {
      console.log(error.message);
    }
  },
  crearProducto: async (nombreProducto, stockProducto, precioProducto) => {
    try {
      const producto = await fetch("http://localhost:3000/api/productos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          nombre: nombreProducto,
          stock: stockProducto,
          precio: precioProducto,
        }),
        credentials: "include",
      });
      const nuevoProducto = await producto.json();
      if (!producto.ok) {
        // Lanza el error con el mensaje del backend si existe
        throw new Error(nuevoProducto.message || "Error al crear producto");
      }
      set((state) => ({ productos: [...state.productos, nuevoProducto.data] }));
      return nuevoProducto;
    } catch (error) {
      console.log(error.message);
    }
  },
  eliminarProducto: async (nombre) => {
    try {
      const producto = await fetch(
        `http://localhost:3000/api/productos/${nombre}`,
        {
          method: "DELETE",
          credentials: "include",
          headers: { "Content-Type": "application/json" },
        }
      );
      const productoJson = await producto.json();
      set((state) => ({
        productos: state.productos.filter(
          (producto) => producto._id !== productoJson.data._id
        ),
      }));
      return productoJson;
    } catch (error) {
      console.log(error.message);
    }
  },
}));

export default useProductosStore;
