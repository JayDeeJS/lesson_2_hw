import { Link } from "react-router-dom";

const Photos = ({photo}) => {

    return (
        <div className="photos">
            <Link className="whiteText" to={`/photos/${photo.id}`}>{photo.title}</Link>
        </div>
    )
};

export default Photos;