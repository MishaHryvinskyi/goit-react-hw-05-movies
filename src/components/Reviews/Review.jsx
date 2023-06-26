import React from "react";
import { ContainerReviews, ReviewsTitle, ReviewsAuthor, ReviewsList, ReviewsContent } from './Reviews.styled.jsx'
import PropTypes from "prop-types";

const Reviews = ({ reviews }) => {
  return (
    <ContainerReviews>
      <ReviewsTitle>Reviews</ReviewsTitle>
      <ul>
        {reviews.map((review) => (
          <ReviewsList key={review.id}>
            <ReviewsAuthor>{review.author}</ReviewsAuthor>
            <ReviewsContent>{review.content}</ReviewsContent>
          </ReviewsList>
        ))}
      </ul>
    </ContainerReviews>
  );
};

Reviews.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      content: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Reviews;