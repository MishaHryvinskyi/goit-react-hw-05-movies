import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Films from "./pages/Films";
import FilmDitalis from "./pages/FilmDetails";
import Leyout from "./pages/Leyout";

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Leyout />}>
          <Route index element={<Home />} />
          <Route path="films" element={<Films />} />
          <Route path="films/:filmsId" element={<FilmDitalis/>} />
        </Route>
      </Routes>
    </div>
  );
};
