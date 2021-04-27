import React from "react";

const ReviewTile = (props) => {
  const { title, description, rating } = props;

  return (
    <li>
      <h2>{title}</h2>
      <p>{description}</p>
      <p>{rating}</p>
    </li>
  );
};

export default ReviewTile;
