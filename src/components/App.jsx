import { NavLink, Route, Routes } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <nav>
        <NavLink to="/">Домашня</NavLink>
        <NavLink to="/films">Колекція</NavLink>
      </nav>
      <Routes>
        <Route path="/" element={<div>Домашня</div>} />
        <Route path="/films" element={<div>Колекція</div>} />
        <Route path="/films/:filmsId" element={<div><img src='https://upload.wikimedia.org/wikipedia/en/thumb/0/02/HJK_Helsinki_Logo.svg/1200px-HJK_Helsinki_Logo.svg.png'/></div>} />
      </Routes>
    </div>
  );
};
