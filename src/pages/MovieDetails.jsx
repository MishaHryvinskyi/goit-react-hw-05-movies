import { useParams, Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const MovieDetails = () => {
    const { movieId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/movies');
    console.log('отаке:', movieId)
    console.log(location);
    return <div>
            <h1>Деталі про фільм: {movieId}</h1>
            <Link to={backLinkLocationRef.current}>Назад до сторінки колекція</Link>
        </div>
}

export default MovieDetails;