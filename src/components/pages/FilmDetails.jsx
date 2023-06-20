import { useParams, Link, useLocation } from "react-router-dom";
import { useRef } from "react";

const FilmDitalis = () => {
    const { filmsId } = useParams();
    const location = useLocation();
    const backLinkLocationRef = useRef(location.state?.from ?? '/films');
    console.log('отаке:', filmsId)
    console.log(location);
    return <div>
            <h1>Деталі про фільм: {filmsId}</h1>
            <Link to={backLinkLocationRef.current}>Назад до сторінки колекція</Link>
        </div>
}

export default FilmDitalis;