import React, { Suspense } from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import { MainContainer } from '../components/TrendsMovieList/TrendsMovieListStyled';

const Home = React.lazy(() => import('../pages/Home/Home'));
const Movies = React.lazy(() => import('../pages/Movie/Movies'));
const MovieDetails = React.lazy(() => import('../pages/MovieDetails/MovieDetails'));
const Cast = React.lazy(() => import('../components/Cast/Cast'));
const Reviews = React.lazy(() => import('../components/Reviews/Review'));
const Leyout = React.lazy(() => import('./Leyout/Leyout'));

const App = () => {
  return (
    <MainContainer>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Leyout />}>
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<Navigate to="/" />} />
          </Route>
        </Routes>
      </Suspense>
    </MainContainer>
  );
};

export default App;