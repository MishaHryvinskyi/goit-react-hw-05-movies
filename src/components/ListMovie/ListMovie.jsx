import { useLocation } from "react-router-dom";
import { MovieList, MovieListItem, StyledLink } from './ListMovie.styled.jsx';

const ListMovie = ({ movies }) => {
  const location = useLocation();

  return (
    <MovieList>
        {movies.map((movie) => (
          <MovieListItem key={movie.id}>
            <StyledLink 
              state={{ from: location }} 
              to={`/movies/${movie.id}`} 
              >
                {movie.title}
            </StyledLink>
          </MovieListItem>
        ))}
      </MovieList>
  )
}

export default ListMovie;