import { Link, useLocation, useSearchParams } from "react-router-dom";
import { useState } from "react";


const Movies = () => {
const [movies, setMovies] = useState([ "movie-1", "movie-2", "movie-3", "movie-4", "movie-5" ]);
    const [searchParams, setSearchParams] = useSearchParams();
    const location = useLocation();
    const movieId = searchParams.get('movieId') ?? '';
    
    const updateQueryString = e => {
        const movieIdValue = e.target.value;
        if(movieIdValue === '') {
            return setSearchParams({});
        } 
        setSearchParams({ movieId: movieIdValue });
    }

    const visibleMovies = movies.filter(movie => movie.includes(movieId))

    console.log(location)
    return <div>
        <input type="text" onChange={updateQueryString}/>
        <ul>
        {visibleMovies.map(movie => {
        return (
            <li>
                <Link key={movie} state={{ from: location }} to={`${movie}`}>
            {movie}
        </Link>
            </li>
        )
    })}
        </ul>
        </div>
}

export default Movies;