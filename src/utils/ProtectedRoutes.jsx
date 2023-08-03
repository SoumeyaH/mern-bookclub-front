import { Navigate, Outlet } from "react-router-dom";
import { useUserContext } from "../contexts/UserContext";

const ProtectedRoutes = () => {
  const { user } = useUserContext();

  return user.token ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;