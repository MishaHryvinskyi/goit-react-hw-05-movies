import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import {
  getMoviesById,
  getCast,
  getReviews,
} from "../components/API/API"; 

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await getMoviesById(movieId);
        setMovieDetails(movieResponse.data);
      } catch (error) {
        console.log("Error fetching movie details:", error);
      }
    };

    const fetchCast = async () => {
      try {
        const castResponse = await getCast(movieId);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.log("Error fetching cast:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await getReviews(movieId);
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.log("Error fetching reviews:", error);
      }
    };

    fetchMovieDetails();
    fetchCast();
    fetchReviews();
  }, [movieId]);

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>Деталі про фільм: {movieDetails.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>Overview: {movieDetails.overview}</p>
          <p>Рейтинг: {movieDetails.vote_average}</p>
          <p>Дата виходу: {movieDetails.release_date}</p>
          
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <Link to={backLinkLocationRef.current}>Назад до сторінки колекція</Link>
    </div>
  );
};

export default MovieDetails;