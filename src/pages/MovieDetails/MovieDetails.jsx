import React, { useEffect, useState, useRef } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import { getMoviesById, getCast, getReviews } from '../../services/api';
import Reviews from '../../components/Reviews/Review';
import Cast from '../../components/Cast/Cast';
import { 
  ContainerMovie, 
  MovieTitle,
  MovieImg,
  ContainerWrap,
  ParagraphMovie,
  ItemLink,
  ListLink,
  ContainerLink,
  LinkBack,
  DitailsLink
 } from './MovieDetails.styled';
 import { HiArrowLeft } from "react-icons/hi";
 import { RiQuestionnaireLine, RiTeamLine } from "react-icons/ri";
 

const MovieDetails = () => {
  const { movieId } = useParams();
  const location = useLocation();
  const backLinkLocationRef = useRef(location.state?.from ?? '/');
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
        console.log('Помилка отримання деталей фільму:', error);
      }
    };

    const fetchCast = async () => {
      try {
        const castResponse = await getCast(movieId);
        setCast(castResponse.data.cast);
      } catch (error) {
        console.log('Помилка отримання акторського складу:', error);
      }
    };

    const fetchReviews = async () => {
      try {
        const reviewsResponse = await getReviews(movieId);
        setReviews(reviewsResponse.data.results);
      } catch (error) {
        console.log('Помилка отримання відгуків:', error);
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
    setShowReviews(false); 
  };

  const handleShowReviews = () => {
    setShowReviews(true);
    setShowCast(false);
  };

  return (
    <div>
      <ContainerLink>
        <LinkBack 
          to={backLinkLocationRef.current}>
              <HiArrowLeft style={{ marginRight: '20px' }} /> Back
        </LinkBack>
      </ContainerLink>
      {movieDetails ? (
        <ContainerMovie>
          <MovieImg
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
          <ContainerWrap>
            <MovieTitle>{movieDetails.title}</MovieTitle>
            <ParagraphMovie><b>Description:</b> {movieDetails.overview}</ParagraphMovie>
            <ParagraphMovie><b>Rating:</b> {movieDetails.vote_average}</ParagraphMovie>
            <ParagraphMovie><b>Release date:</b> {movieDetails.release_date}</ParagraphMovie>
          </ContainerWrap>
        </ContainerMovie>
      ) : (
        <p>Loading...</p>
      )}

      <ListLink>
        <ItemLink>
          <DitailsLink 
            to={`/movies/${movieId}/cast`} 
            onClick={handleShowCast} 
            isActive={(match, location) => match || location.pathname === `/movies/${movieId}/cast`}>
             <RiTeamLine style={{ marginRight: '10px' }}/> Cast
          </DitailsLink>
        </ItemLink>
        <ItemLink>
          <DitailsLink 
            to={`/movies/${movieId}/reviews`} 
            onClick={handleShowReviews} 
            isActive={(match, location) => match || location.pathname === `/movies/${movieId}/reviews`}>
              Reviews <RiQuestionnaireLine  style={{ marginLeft: '10px' }}/>
          </DitailsLink>
        </ItemLink>
      </ListLink>

      {showCast && cast.length > 0 && <Cast cast={cast} showCast={showCast} />}

      {showReviews && reviews.length > 0 && <Reviews reviews={reviews} showReviews={showReviews} />} 
    </div>
  );
};

export default MovieDetails;