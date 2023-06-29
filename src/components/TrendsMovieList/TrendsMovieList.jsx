import { 
  MovieTrendList,
  MovieTrendListItem, 
  MovieTrendImg,
  MovieTrendTitle,
  MovieLink 
} from './TrendsMovieListStyled';
import React from 'react';
import PropTypes from 'prop-types';

const TrendsMovieList = ({ movies }) => {
  return (
    <MovieTrendList>
        {movies.map(movie => (
          <MovieLink key={movie.id} to={`/movies/${movie.id}`}>
            <MovieTrendListItem>
              <MovieTrendImg
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt={movie.title}
              />
              <MovieTrendTitle>{movie.title}</MovieTrendTitle>
            </MovieTrendListItem>
          </MovieLink>
        ))}
      </MovieTrendList>
  );
};

TrendsMovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      poster_path: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default TrendsMovieList;
    