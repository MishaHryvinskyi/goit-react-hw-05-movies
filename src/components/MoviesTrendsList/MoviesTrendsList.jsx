import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { getTrendsDayMovies } from '../API/API';
import { Link } from 'react-router-dom';
import { 
    ContainerMovie,
    MovieTrendList,
    MovieTrendListItem, 
    MovieTrendImg,
    MovieTrendTitle,
    MovieTitle 
} from './MoviesTrendsListStyled';

const MoviesTrendsList = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchTrendsDayMovies = async () => {
      try {
        const response = await getTrendsDayMovies();
        const moviesData = response.data.results;
        setMovies(moviesData);
      } catch (error) {
        console.error('Error fetching trend day movies:', error);
      }
    };

    fetchTrendsDayMovies();
  }, []);

  return (
    <ContainerMovie>
      <MovieTitle>Trending Movies Today</MovieTitle>
      <MovieTrendList>
        {movies.map(movie => (
          <Link key={movie.id} to={`/movies/${movie.id}`} style={{ textDecoration: 'none', }}>
            <MovieTrendListItem>
              <MovieTrendImg
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTrendTitle>{movie.title}</MovieTrendTitle>
            </MovieTrendListItem>
          </Link>
        ))}
      </MovieTrendList>
    </ContainerMovie>
  );
};

MoviesTrendsList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string,
      title: PropTypes.string.isRequired
    })
  ).isRequired
};

export default MoviesTrendsList;