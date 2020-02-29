import React from "react";
import ReactDOM from "react-dom";
import SeasonDisplay from "./SeasonDisplay";
import Spinner from "./Spinner";

// Class based component
// We are subclassing React.Component, basically borrowing functionality into our App class
class App extends React.Component {
  // state is the same as the constructor function, babel does it for us
  state = { lat: null, errorMessage: "" };

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude }),
      err => this.setState({ errorMessage: err.message })
    );
  }

  render() {
    const { errorMessage, lat } = this.state

    return (
      <div className="border red">
        { (errorMessage && !lat) && <div>Error: {errorMessage}</div> }
        { (!errorMessage && lat) && <SeasonDisplay lat={lat} /> } 
        { (errorMessage && lat) && <Spinner message="Please accept location request" /> }
      </div>
    )
  }
}

ReactDOM.render(<App />, document.querySelector("#root"));
