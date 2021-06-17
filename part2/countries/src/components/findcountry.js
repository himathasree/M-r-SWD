import React from 'react';

// Component with an input for finding countries

const findCountry = ({country, setCountry}) => {
    return (
        <div>
            <label htmlFor='find-country'>Find countries: </label>
            <input id='find-country' value={country} autoFocus autoComplete='off'
                onChange={event => setCountry(event.target.value)}
            />
        </div>
    );
};

export default findCountry;
