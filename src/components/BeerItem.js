import React from "react";

const BeerItem = ({ beer, onBeerSelect }) => {
  return (
    <div
      onClick={() => {
        onBeerSelect(beer);
      }}
      className="ui raised link card beer-item purple"
    >
      <div className="ui mini centered image">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="content">
        <div className="center aligned header">{beer.name}</div>
      </div>
    </div>
  );
};

export default BeerItem;
