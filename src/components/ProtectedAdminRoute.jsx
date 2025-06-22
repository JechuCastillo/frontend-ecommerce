import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
function ProtectedAdminRoute({ children }) {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/"></Navigate>;
  }
  if (user.rol !== "admin") {
    return <Navigate to="/"></Navigate>;
  }
  return children;
}

export default ProtectedAdminRoute;
