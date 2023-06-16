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
      </Routes>
      
    </div>
  );
};
