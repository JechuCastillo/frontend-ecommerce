import { Navigate } from "react-router-dom";
import { useAuthStore } from "../stores/authStore";
function ProtectedRoute({ children }) {
  const { user } = useAuthStore();
  if (!user) {
    return <Navigate to="/"></Navigate>;
  }
  return children;
}

export default ProtectedRoute;
