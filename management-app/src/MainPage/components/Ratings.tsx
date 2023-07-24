import { faStar, faStarHalf } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Ratings = ({ratings}:{ratings:number}) => {
  var ratingCopy = ratings;
  const rating = [];
  while (ratingCopy > 0.1) {
    if (ratingCopy > 1) {
      rating.push(faStar);
    } else {
      rating.push(faStarHalf);
    }
    ratingCopy--;
  }
  return (
    <span className="justify-start">
      {rating.map((rate) => {
        return <FontAwesomeIcon icon={rate} style={{ color: "#ffc800" }} />;
      })}
    </span>
  );
};

export default Ratings;
