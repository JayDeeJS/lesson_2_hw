import { Outlet } from "react-router-dom";
import Button from "../Button";

const LayoutButton = () => {
    return (
        <>
            <Button/>
            <Outlet/>
        </>
    )
};

export default LayoutButton;