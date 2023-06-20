import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";


const Films = () => {
const [films, setFilms] = useState([ "film-1", "film-2", "film-3", "film-4", "film-5" ]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const filmsId = searchParams.get('filmsId') ?? '';
    
    const updateQueryString = e => {
        const filmIdValue = e.target.value;
        if(filmIdValue === '') {
            return setSearchParams({});
        } 
        setSearchParams({ filmsId: filmIdValue });
    }

    const visibleFilms = films.filter(film => film.includes(filmsId))

    console.log(location)
    return <div>
        <input type="text" onChange={updateQueryString}/>
        <ul>
        {visibleFilms.map(film => {
        return (
            <li>
                <Link key={film} state={{ from: location }} to={`${film}`}>
            {film}
        </Link>
            </li>
        )
    })}
        </ul>
        </div>
}

export default Films;