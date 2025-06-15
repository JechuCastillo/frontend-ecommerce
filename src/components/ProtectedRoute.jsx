import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
function ProtectedRoute({ children }) {
  const { autenticado } = useAuthStore();
  if (!autenticado().success) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
}

export default ProtectedRoute;
