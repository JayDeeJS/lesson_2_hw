import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { fetchPhotos, fetchPhotosById } from '../axios/requests';
import {StoreContext} from './StoreContext'

const StoreProvider = ({children}) => {

    const navigate = useNavigate()

    const [photos, setPhotos] = useState([])
    const [photo, setPhoto] = useState({})
    const [validId, setValidId] = useState(true);

    const handleGoBack = () => {
        navigate(-1)
    }

    const getPhotos = () => {
        fetchPhotos()
            .then((data) => {setPhotos(data)})
    }

    const getPhotosById = (id) => {
        fetchPhotosById(id)
            .then((data) => {setPhoto(data)
            console.log(data)})
    }

    const value = {
        handleGoBack,
        photo, photos,
        getPhotosById, getPhotos,
        validId, setValidId,
    }

    return (
        <StoreContext.Provider value={value}>
            {children}
        </StoreContext.Provider>
    )
};

export default StoreProvider;