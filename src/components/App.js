import React from "react";
import BeerList from "./BeerList";
import SearchBar from "./SearchBar";
import BeerDetail from "./BeerDetail";
import punk from "../apis/punk";
import RandomButton from "./RandomButton";

class App extends React.Component {
  state = {
    beers: [],
    selectedBeer: null
  };

  componentDidMount() {
    this.getRandomBeer();
  }

  getRandomBeer = async () => {
    const response = await punk.get("/beers/random");

    this.setState({
      selectedBeer: response.data[0],
      beers: response.data
    });
  };

  onTermSubmit = async term => {
    const response = await punk.get("/beers/", {
      params: {
        beer_name: term
      }
    });

    this.setState({
      beers: response.data,
      selectedBeer: response.data[0]
    });
  };

  onBeerSelect = beer => {
    this.setState({
      selectedBeer: beer
    });
  };

  render() {
    return (
      <div className="ui container">
        <SearchBar
          onFormSubmit={this.onTermSubmit}
          className="ui clearing segment"
        />
        <div onClick={this.getRandomBeer}>
          <RandomButton />
        </div>

        <div className="ui grid">
          <div className="ui row" />
          <div className="eleven wide column">
            <BeerList
              onBeerSelect={this.onBeerSelect}
              beers={this.state.beers}
            />
          </div>
          <div className="five wide column">
            <BeerDetail beer={this.state.selectedBeer} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
