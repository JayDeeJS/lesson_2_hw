import { useContext } from "react";
import { StoreContext } from "../store/StoreContext";

const CorrectIdPage = () => {

    const { photo } = useContext(StoreContext);

    return (
        <div className="photoContent">
            <p>{photo.title}</p>
            <img src={photo.url} alt="img goes here" />
        </div>
    )
};

export default CorrectIdPage;