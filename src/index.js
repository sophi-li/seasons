import React from 'react';
import ReactDOM from 'react-dom';

// Functional component:
// const App = () => {
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         (err) => console.log(err)
//     )
//     return (
//     <div>Latitude: </div>
//     )
// }

// Class based component
// We are subclassing React.Component, basically borrowing functionality into our App class
class App extends React.Component {
    state = {lat: null, errorMessage: '' };
    

    componentDidMount() {
        window.navigator.geolocation.getCurrentPosition(
            position => this.setState( { lat: position.coords.latitude }),
            err => this.setState({ errorMessage: err.message })   
        )
    }

    // We have to define render when using React
    render() {  
        // return (
        // <div>Latitude: {this.state.lat}
        // < br />
        // Error: {this.state.errorMessage}
        // </div>
        // );

        // conditional rendering - returning different JSX depending on state/props of the component
        if (this.state.errorMessage && !this.state.lat) {
        return <div>Error: { this.state.errorMessage}</div>
        }
        if(!this.state.errorMessage && this.state.lat) {
            return <div>Latitude: {this.state.lat}</div>
        }
        return <div>Loading!</div>
    }
}


ReactDOM.render(<App />, document.getElementById('root'));

