import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContextPorvider";

const PrivateRoute = ({ children }) => {
  const { currentUserState } = useAuth();

  return !currentUserState ? children : <Navigate to="/" replace={true} />;
};

const PrivatePageRoute = ({ children }) => {
  const { currentUserState } = useAuth();
  return currentUserState ? children : <Navigate to="/signin" replace={true} />;
};

export { PrivateRoute, PrivatePageRoute };
