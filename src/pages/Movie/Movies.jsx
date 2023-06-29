import { useSearchParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getSearchMovies } from "../../services/api";
import { MovieContainer, MovieInput } from './Movies.styled';
import  ListMovie  from '../../components/ListMovie/ListMovie';

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query") ?? "";

  const updateQueryString = (e) => {
    const movieIdValue = e.target.value;
    if (movieIdValue === "") {
      return setSearchParams({});
    }
    setSearchParams({ query: movieIdValue });
  };

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await getSearchMovies(query);
        const moviesData = response.data.results;
        setMovies(moviesData);
      } catch (error) {
        console.error("Error searching movies:", error);
      }
    };

    const debounceSearch = setTimeout(() => {
      searchMovies();
    }, 500); 

    return () => clearTimeout(debounceSearch);
  }, [query]);

  return (
    <MovieContainer>
      <MovieInput 
        type="text" 
        onChange={updateQueryString} 
        placeholder="enter movie" 
      />
      <ListMovie movies={movies} />
    </MovieContainer>
  );
};

export default Movies;