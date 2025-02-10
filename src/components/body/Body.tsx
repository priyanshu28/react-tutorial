import React, { useState, useEffect } from "react";
import RestaurantCard from "../restaurantCard/RestaurantCard";
import { RESTAURANTS } from "../../utils/constant";
import ShimmerCard from "../restaurantCard/ShimmerCard";
import { Link } from "react-router-dom";

const Body = () => {
  const [restaurants, setRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchString, setSearchString] = useState("");

  const handleRatingFilter = () => {
    setFilteredRestaurants(
      restaurants.filter((res) => res.info.avgRating >= 4.5)
    );
  };

  const handleSearch = () => {
    const filteredRes = restaurants.filter(
      (res) =>
        res.info.name.toLowerCase().includes(searchString.toLowerCase()) ||
        res.info.cuisines.includes(searchString)
    );
    setFilteredRestaurants(filteredRes);
  };

  const fetchData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.8718155&lng=77.6021817&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const data = await response.json();
    console.log(
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    const restaurantsFromAPI =
      data.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setRestaurants(restaurantsFromAPI);
    setFilteredRestaurants(restaurantsFromAPI);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="body">
      <div className="filters">
        <div className="search">
          <input
            type="text"
            value={searchString}
            onChange={(e) => setSearchString(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <button className="top-rated-filter-btn" onClick={handleRatingFilter}>
          Top rated restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {!filteredRestaurants.length && <ShimmerCard />}
        {filteredRestaurants.map((restaurant, i) => {
          return (
            <div className="restaurant-card" key={restaurant.info.id}>
              <Link to={`/restaurant/${restaurant.info.id}`}>
                <RestaurantCard key={restaurant.info.id} {...restaurant} />
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
