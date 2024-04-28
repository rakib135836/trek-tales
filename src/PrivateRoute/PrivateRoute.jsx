import { useContext } from "react";
import { FirebaseContext } from "../FirebaseProvider/FirebaseProvider";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(FirebaseContext);
    const location = useLocation();
    console.log(location.pathname)


    if (loading) {
        return <span className="loading loading-spinner text-accent"></span>
    }
    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>;

};

export default PrivateRoute;