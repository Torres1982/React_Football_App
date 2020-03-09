import React from 'react';
import './Club.css';

const club = (props) => {
    return (
        <div className="Club">
            <p> {props.club} - {props.country} </p>
        </div>
    );
}

export default club;