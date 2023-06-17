import { useParams } from "react-router-dom";

const FilmDitalis = () => {
    const { filmsId } = useParams();
    console.log('отаке:', filmsId)
    return <div>Деталі про фільм: {filmsId}</div>
}

export default FilmDitalis;