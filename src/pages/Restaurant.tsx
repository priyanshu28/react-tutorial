import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { RESTAURANT_DETAILS_BASE_URL } from "../utils/constant";
import ShimmerCard from "../components/restaurantCard/ShimmerCard";

const Restaurant = () => {
  const { resId } = useParams();
  const [resDetails, setResDetails] = useState(null);
  const [resMenu, setResMenu] = useState(null);

  const fetchData = async () => {
    const res = await fetch(`${RESTAURANT_DETAILS_BASE_URL}${resId}`);
    const data = await res.json();
    console.log(data.data.cards[2]);
    console.log(
      data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
        .itemCards
    );
    // setResInfo(
    //   data.data.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card
    //     .itemCards
    // );
    setResDetails(data.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (!resDetails) return <ShimmerCard />;

  const { name, costForTwoMessage, city, avgRatingString, areaName, cuisines } =
    resDetails?.cards[2]?.card?.card?.info;
  const { itemCards } =
    resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card
      ?.card;

  return (
    <div>
      <h3>
        {name} - {areaName} - {city}
      </h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{costForTwoMessage}</h4>
      <h5>* {avgRatingString}</h5>
      <br></br>
      <hr></hr>
      <br></br>
      <p>Recommonded Items ({itemCards?.length})</p>
      <br></br>
      <ul>
        {itemCards?.map((item) => {
          return (
            <li key={item.card.info.id}>{`${item.card.info.name} - Rs ${
              item.card.info.price / 100 || item.card.info.defaultPrice / 100
            }`}</li>
          );
        })}
      </ul>
    </div>
  );
};

export default Restaurant;
