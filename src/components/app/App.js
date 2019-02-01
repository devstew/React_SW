import React, {Component} from 'react';

import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import PeoplePage from '../people-page/PeoplePage'
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import ErrorButton from '../error-button/ErrorButton';
import './App.css';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 5,
        hasError: false
    };

    toggleRandomPlanet = () => {
        this.setState((state) => {
            return {
                showRandomPlanet: !state.showRandomPlanet
            }
        })
    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    componentDidCatch() {
        console.log('componentDidCatch()');
        this.setState({
            hasError: true
        });
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <div className="app">
                <Header/>
                {planet}

                <div className="row mb2 button-row">
                    <button
                        className="toggle-planet btn btn-warning btn-lg"
                        onClick={this.toggleRandomPlanet}>
                        Toggle Random Planet
                    </button>
                    <ErrorButton/>
                </div>

                <PeoplePage/>
                <PeoplePage/>
                <PeoplePage/>

            </div>
        )
    }
}