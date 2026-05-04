import { Navigate, useLocation } from "react-router-dom";

export default function ProtectedRoute({ children }) {

  const token = localStorage.getItem("token");
  const location = useLocation();

  // 🔥 prevent redirect loop
  if (!token && location.pathname !== "/") {
    return <Navigate to="/" />;
  }

  return children;
}