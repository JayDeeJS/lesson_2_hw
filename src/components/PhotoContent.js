import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import CorrectIdPage from "../pages/CorrectIdPage";
import WrongIdPage from "../pages/WrondIdPage";
import { StoreContext } from "../store/StoreContext";

const PhotoContent = () => {

    const { getPhotosById, validId, setValidId } = useContext(StoreContext);

    const {id} = useParams()

    useEffect(() => {
        const idNum = parseInt(id);
        (isNaN(idNum) || idNum <= 0)
        ? setValidId(false)
        : getPhotosById(idNum)
    }, [id])

    return (
        !validId
        ? <WrongIdPage/>
        : <CorrectIdPage/>
    )
};

export default PhotoContent;