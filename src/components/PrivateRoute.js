import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextPorvider";

const PrivateRoute = ({ children }) => {
  const { currentUserState } = useAuth();

  return !currentUserState ? children : <Navigate to="/" replace={true} />;
};

export default PrivateRoute;
