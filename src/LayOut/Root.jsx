import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";

const Root = () => {
    return (
        <div className="font-Poppins max-w-7xl mx-auto">
            <div className="my-6"><NavBar></NavBar></div>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;