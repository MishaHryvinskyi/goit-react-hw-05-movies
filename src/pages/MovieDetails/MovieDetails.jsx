import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMoviesById, getCast, getReviews } from "../../components/API/API";
import Reviews from "../../components/Reviews/Review";
import Cast from "../../components/Cast/Cast";
import { 
  ContainerMovie, 
  MovieTitle,
  MovieImg,
  ContainerWrap,
  ParagraphMovie
 } from './ContainerSerch.styled';

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false); 

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const movieResponse = await getMoviesById(movieId);
        setMovieDetails(movieResponse.data);
      } catch (error) {
        console.log("Помилка отримання деталей фільму:", error);
      }
    };

    const fetchCast = async () => {
      try {
        const castResponse = await getCast(movieId);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.log("Помилка отримання акторського складу:", error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await getReviews(movieId);
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.log("Помилка отримання відгуків:", error);
      }
    };

    fetchMovieDetails();
    if (showCast) {
      fetchCast();
    }
    if (showReviews) { 
      fetchReviews();
    }
  }, [movieId, showCast, showReviews]); 

  const handleShowCast = () => {
    setShowCast(true);
  };

  const handleShowReviews = () => {
    setShowReviews(true); 
  };

  return (
    <div>
      {movieDetails ? (
        <ContainerMovie>
            <MovieImg
              src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
              alt={movieDetails.title}
            />
          <ContainerWrap>
          <MovieTitle>{movieDetails.title}</MovieTitle>
            <ParagraphMovie><b>Review:</b> {movieDetails.overview}</ParagraphMovie>
            <ParagraphMovie><b>Rating:</b>Rating: {movieDetails.vote_average}</ParagraphMovie>
            <ParagraphMovie><b>Release date:</b> {movieDetails.release_date}</ParagraphMovie>
          </ContainerWrap>
        </ContainerMovie>
      ) : (
        <p>Loading...</p>
      )}

      {showCast && cast.length > 0 && <Cast cast={cast} />}

      {showReviews && reviews.length > 0 && <Reviews reviews={reviews} />} 

      <Link to={`/movies/${movieId}/cast`} onClick={handleShowCast}>Переглянути акторський склад</Link>
      <Link to={`/movies/${movieId}/reviews`} onClick={handleShowReviews}>Переглянути відгуки</Link> 
      <Link to={backLinkLocationRef.current}>Назад до сторінки колекції</Link>
    </div>
  );
};

export default MovieDetails;