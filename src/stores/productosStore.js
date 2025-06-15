import { create } from "zustand";
const useProductosStore = create((set) => ({
  productos: [],

  getProductos: async () => {
    try {
      const productosFetch = await fetch(
        "http://localhost:3000/api/productos",
        { method: "GET", credentials: "include" }
      );
      const productosJson = await productosFetch.json();
      set({ productos: productosJson.data });
    } catch (error) {
      console.log(error);
    }
  },
}));

export default useProductosStore;
