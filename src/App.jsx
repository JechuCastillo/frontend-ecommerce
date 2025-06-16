import { Routes, Route, Outlet } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Admin from "./pages/Admin";
import Register from "./pages/Register";
import LayoutLogin from "./components/LayoutLogin";
import Productos from "./pages/Productos";
import ProtectedRoute from "./components/ProtectedRoute";
import ProtectedAdminRoute from "./components/ProtectedAdminRoute";
import Carrito from './pages/Carrito'
function App() {
  return (
    <Routes>
      {/*Ruta publica*/}
      <Route element={<LayoutLogin></LayoutLogin>}>
        <Route index element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
      </Route>
      <Route path="/" element={<Layout></Layout>}>
        <Route
          index
          path="/home"
          element={
            <ProtectedRoute>
              <Home></Home>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/productos"
          element={
            <ProtectedRoute>
              <Productos></Productos>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/carrito"
          element={
            <ProtectedRoute>
              <Carrito></Carrito>
            </ProtectedRoute>
          }
        ></Route>
        <Route
          path="/admin"
          element={
            <ProtectedAdminRoute>
              <Admin></Admin>
            </ProtectedAdminRoute>
          }
        ></Route>
      </Route>
    </Routes>
  );
}

export default App;
