import { Route, Routes, Link, useNavigate } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Cast from "../components/Cast/Cast";
import Reviews from "../components/Reviews/Review";
import Leyout from "../pages/Leyout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
};