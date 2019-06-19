import React from "react";
import BeerItem from "./BeerItem";

const BeerList = ({ beers, onBeerSelect }) => {
  const renderedList = beers.map(beer => {
    return <BeerItem onBeerSelect={onBeerSelect} beer={beer} key={beer.id} />;
  });

  return <div className="ui link cards">{renderedList}</div>;
};

export default BeerList;
