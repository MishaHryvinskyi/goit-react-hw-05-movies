import React from "react";
import PropTypes from "prop-types";
import { 
  CastContainer, 
  TitleCast, 
  CastList, 
  CastListItem, 
  CastImg, 
  CastParagraph, 
  CastRole 
} from './Cast.styled';

const Cast = ({ cast }) => {
  const defaultImage = "https://icon-library.com/images/no-photo-available-icon/no-photo-available-icon-20.jpg";

  return (
    <CastContainer>
      <TitleCast>Cast</TitleCast>
      <CastList>
        {cast.map((actor) => (
          <CastListItem key={actor.id}>
            <CastImg
              src={actor.profile_path ? `https://image.tmdb.org/t/p/w200${actor.profile_path}` : defaultImage}
              alt={actor.name}
              width="200"
              height="300"
            />
            <CastParagraph>{actor.name}</CastParagraph>
            <CastRole>{actor.character}</CastRole>
          </CastListItem>
        ))}
      </CastList>
    </CastContainer>
  );
};

Cast.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired
    })
  ).isRequired
};

export default Cast;