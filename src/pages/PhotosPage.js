import { useEffect, useContext } from "react";
import { StoreContext } from "../store/StoreContext";
import Photos from "../components/Photos";

const PhotosPage = () => {

    const { photos, getPhotos } = useContext(StoreContext);

    useEffect(() => {
        getPhotos()
    }, [getPhotos])

    return (
        <div className="pageContent">
            <h2>Photos page</h2>
            <div className="photosContainer">
                {photos.slice(0, 10).map((photo) =>
                  <Photos key={photo.id} photo={photo}/>
                )}
            </div>
        </div>
    )
};

export default PhotosPage;