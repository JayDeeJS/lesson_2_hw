import { useContext } from "react";
import { StoreContext } from "../store/StoreContext";

const Button = () => {

    const { handleGoBack } = useContext(StoreContext);

    return (
        <button onClick={handleGoBack} className="btn">Go back</button>
    )
};

export default Button;