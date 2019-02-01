import React, {Component} from 'react';

import Header from '../header/Header';
import RandomPlanet from '../random-planet/RandomPlanet';
import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';

import './App.css';

export default class App extends Component {
    state = {
        showRandomPlanet: true,
        selectedPerson: 5,
        hasError: false
    };

    toggleRandomPlanet = () => {

    };

    onPersonSelected = (id) => {
        this.setState({
            selectedPerson: id
        })
    };

    componentDidCatch(){
        console.log('componentDidCatch()');
        this.setState({
            hasError: true
        });
    };

    render() {
        const planet = this.state.showRandomPlanet ? <RandomPlanet/> : null;
        return (
            <div className='app'>
                <Header/>
                <RandomPlanet/>

                <div className='row mb2'>
                    <div className="col-md-6">
                        <ItemList onItemSelected={this.onPersonSelected}/>
                    </div>
                    <div className="col-md-6">
                        <PersonDetails personId={this.state.selectedPerson}/>
                    </div>
                </div>
            </div>
        )
    }
}