import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import MovieDetails from "../pages/MovieDetails";
import Leyout from "../pages/Leyout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />} />
          <Route path="movies/:movieId" element={<MovieDetails/>} />
        </Route>
      </Routes>
    </div>
  );
};
