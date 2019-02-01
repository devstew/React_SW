import React, {Component} from 'react';

import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import PeoplePage from '../people-page/PeoplePage'
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import ErrorButton from '../error-button/ErrorButton';
import './App.css';
import SwapiService from "../../services/swapi-service";

export default class App extends Component {

    swapiService = new SwapiService();

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

                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllPlanets}
                                  renderItem={(item) => (<span> {item.name}</span>)}/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>

                <div className='row mb2'>
                    <div className='col-md-6'>
                        <ItemList onItemSelected={this.onPersonSelected}
                                  getData={this.swapiService.getAllStarships}
                                  renderItem={(item) => item.name}/>
                    </div>
                    <div className='col-md-6'>
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}