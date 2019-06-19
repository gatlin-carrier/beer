import React from "react";

const BeerDetail = ({ beer }) => {
  if (!beer) {
    return (
      <div className="ui segment">
        <div className="ui active inverted dimmer">
          <div className="ui text loader">Loading</div>
        </div>
        <p />
      </div>
    );
  }

  var foodPairings = beer.food_pairing.join(", ");

  return (
    <div className="ui card purple">
      <div className="ui mini centered image">
        <img src={beer.image_url} alt={beer.name} />
      </div>
      <div className="content">
        <div className="center aligned header">{beer.name}</div>
        <div className="description">{beer.description}</div>
        <br />
        <div className="extra content">
          <b>Pairs well with:</b> {foodPairings}
        </div>
      </div>
    </div>
  );
};

export default BeerDetail;
