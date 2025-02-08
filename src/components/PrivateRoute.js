import { Navigate } from "react-router";

const PrivateRoute = ({children}) => {
    const isAthenticated = localStorage.getItem("token"); //token check
    return isAthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;