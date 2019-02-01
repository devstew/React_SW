import React from 'react';
import './ErrorIndicator.css';
import icon from './err-explo.png';

const ErrorIndicator = () =>{
    return (
        <div className='error-indicator'>
            <img src={icon} alt="star error"/>
            <span className='boom'>BOOM!</span>
            <span>
                something has gone terribly wrong
            </span>
            <span>
                (but we already sent droids to fix it)
            </span>
        </div>
    );
};

export default ErrorIndicator;