import React, {Component} from 'react';

import ItemList from '../item-list/ItemList';
import PersonDetails from '../person-details/PersonDetails';
import ErrorIndicator from '../error-indicator/ErrorIndicator';

import './PeoplePage.css';

export default class PeoplePage extends Component {
    state = {
        selectedPerson: 3,
        hasError: false
    };

    componentDidCatch(error, info) {
        debugger;

        this.setState({
            hasError: true
        });
    };

    onPersonSelected = (selectedPerson) => {
        this.setState({selectedPerson});
    };

    render() {
        if (this.state.hasError) {
            return <ErrorIndicator/>
        }

        return (
            <div className='row mb2'>
                <div className='col-md-6'>
                    <ItemList onItemSelected={this.onPersonSelected}/>
                </div>
                <div className='col-md-6'>
                    <PersonDetails personId={this.state.selectedPerson}/>
                </div>
            </div>
        );
    };
}