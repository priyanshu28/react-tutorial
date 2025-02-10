import React from "react";

function ShimmerCard() {
  return (
    <>
      {[...Array(10)].map((_, i) => {
        return (
          <div key={i} className="restaurant-card shimmer-card">
            <div className="img-skeleton"></div>
            <h3></h3>
            <h4></h4>
            <p></p>
          </div>
        );
      })}
    </>
  );
}

export default ShimmerCard;
