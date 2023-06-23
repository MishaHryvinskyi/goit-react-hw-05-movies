import React from "react";

const Cast = ({ cast }) => {
  const defaultImage = "https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg";

  return (
    <div>
      <h2>Cast</h2>
      <ul>
        {cast.map((actor) => (
          <li key={actor.id}>
            <img
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : defaultImage}
              alt={actor.name}
              width="200"
              height="300"
            />
            <p>{actor.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Cast;