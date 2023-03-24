import { Outlet } from "react-router-dom";
import NavBar from "../NavBar";

const LayoutNavBar = () => {
    return (
        <>
            <NavBar/>
            <Outlet/>
        </>
    )
};

export default LayoutNavBar;