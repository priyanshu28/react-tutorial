import React from "react";
import { RESTAURANT_IMG_BASE_URL } from "../../utils/constant";

const RestaurantCard = (props) => {
  const { name, cloudinaryImageId, avgRating, cuisines } = props.info;
  return (
    <>
      <img alt={name} src={`${RESTAURANT_IMG_BASE_URL}${cloudinaryImageId}`} />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <p>{avgRating} ratings</p>
    </>
  );
};

export default RestaurantCard;
