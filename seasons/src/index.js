import React from 'react';
import ReactDOM from 'react-dom';
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            latitude: null,
            longitude: null,
            errorMessage: '',
        };

        window.navigator.geolocation.getCurrentPosition(
            position => {
                this.setState({ latitude: position.coords.latitude });
                this.setState({ longitude: position.coords.longitude });
            },
            err => this.setState({ errorMessage: err.message })
        );
    }

    render() {
        if (this.state.errorMessage && ! this.state.latitude && ! this.state.longitude) {
            return <div>Error: {this.state.errorMessage}</div>
        }

        if (! this.state.errorMessage && this.state.latitude && this.state.longitude) {
            return (
                <>
                    <div>Широта: {this.state.latitude}</div>
                    <div>Долгота: {this.state.longitude}</div>
                </>
            );
        }

        return <div>Loading</div> 
            
    }
};

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);
