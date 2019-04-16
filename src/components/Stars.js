import React from "react";
import { Star, StarHalf, StarBorder } from "@material-ui/icons";

function Stars(props) {
  const count = rating => {
    let stars = [];
    for (var i = 0; i < Math.floor(rating); i++) {
      stars.push(<Star key={i} />);
    }
    if (rating % 1) {
      stars.push(<StarHalf key={i} />);
      i++;
    }
    for (i; i < 5; i++) {
      stars.push(<StarBorder key={i} />);
    }
    return stars;
  };
  return <div className="rating">{count(props.rating).map(el => el)}</div>;
}

export default Stars;
