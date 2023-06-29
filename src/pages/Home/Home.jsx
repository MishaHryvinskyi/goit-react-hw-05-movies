import React, { useState, useEffect } from 'react';
import { getTrendsDayMovies } from '../../services/api';
import { ContainerMovie, MovieTitle } from '../../components/TrendsMovieList/TrendsMovieListStyled';
import TrendsMovieList from '../../components/TrendsMovieList/TrendsMovieList';

const Home = () => {
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
      <TrendsMovieList movies={movies} />
    </ContainerMovie>
  );
};

export default Home;