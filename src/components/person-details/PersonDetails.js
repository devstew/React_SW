import React, { Component } from 'react';

import './PersonDetails.css';
import SwapiService from "../../services/swapi-service";
import ErrorIndicator from "../error-indicator/ErrorIndicator";
import Spinner from "../spinner/Spinner";

export default class PersonDetails extends Component {
    swapiService  = new SwapiService();

    state = {
        person: null,
        selectedPerson:null,
        loading:true
    };

    componentDidMount(){
        this.updatePerson();
    }

    componentDidUpdate(prevProps){
        if(this.props.personId !== prevProps.personId){
            this.updatePerson();
        }
    }

    updatePerson() {
        const { personId } = this.props;
        if(!personId){
            return;
        }
        this.swapiService.getPerson(personId)
            .then((person) => {
                this.setState({ person })
            })
    }

    // onPersonLoaded = (person) => {
    //     this.setState({
    //         person,
    //         loading: false,
    //         error: false
    //     })
    // };
    //
    // onError = (err) => {
    //     this.setState({
    //         loading: false,
    //         error: true
    //     })
    // };

    render() {

        // const { person, loading } = this.state;
        //
        // const hasData = !(loading || error);
        //
        // const errorMessage = error ? <ErrorIndicator/> : null;
        // const spinner = loading ? <Spinner/> : null;

        if(!this.state.person){
            return <span> Select a person from a list</span>
        }

        const {id, name, gender, birthYear, eyeColor} = this.state.person;
        return (
            <div className="person-details card">
                <img className="person-image"
                     src={`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`}
                     alt="character"/>

                <div className="card-body">
                    <h4>{name} </h4>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">
                            <span className="term">Gender</span>
                            <span>{gender}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Birth Year</span>
                            <span>{birthYear}</span>
                        </li>
                        <li className="list-group-item">
                            <span className="term">Eye Color</span>
                            <span>{eyeColor}</span>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}