import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import { getMoviesById, getCast, getReviews } from "../components/API/API";
import Reviews from "../components/Reviews/Review";
import Cast from "../components/Cast/Cast";

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? "/movies");
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [reviews, setReviews] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false); // Додано стан для відстеження з'явлення компонента Reviews

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
    if (showReviews) { // Завантажуйте відгуки, тільки якщо showReviews === true
      fetchReviews();
    }
  }, [movieId, showCast, showReviews]); // Додано showReviews до залежностей ефекту

  const handleShowCast = () => {
    setShowCast(true);
  };

  const handleShowReviews = () => {
    setShowReviews(true); // Встановлюємо showReviews в true при натисканні на посилання
  };

  return (
    <div>
      {movieDetails ? (
        <div>
          <h1>Деталі про фільм: {movieDetails.title}</h1>
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <p>Огляд: {movieDetails.overview}</p>
          <p>Рейтинг: {movieDetails.vote_average}</p>
          <p>Дата виходу: {movieDetails.release_date}</p>
        </div>
      ) : (
        <p>Завантаження...</p>
      )}

      {showCast && cast.length > 0 && <Cast cast={cast} />}

      {showReviews && reviews.length > 0 && <Reviews reviews={reviews} />} {/* Відображаємо компонент Reviews, якщо showReviews === true і reviews.length > 0 */}

      <Link to={`/movies/${movieId}/cast`} onClick={handleShowCast}>Переглянути акторський склад</Link>
      <Link to={`/movies/${movieId}/reviews`} onClick={handleShowReviews}>Переглянути відгуки</Link> {/* Додано посилання для показу відгуків */}
      <Link to={backLinkLocationRef.current}>Назад до сторінки колекції</Link>
    </div>
  );
};

export default MovieDetails;