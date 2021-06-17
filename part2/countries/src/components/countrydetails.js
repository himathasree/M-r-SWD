import React from 'react';
import Weather from './weather';

// Component for displaying details of a country

const countryDetails = ({country}) => {
    return (
        <>
            <h1>{country.name}</h1>
            <p>Capital: {country.capital}</p>
            <p>Population: {country.population}</p>
            <h2>Languages</h2>
            <ul>
                {
                    country.languages.map(language => <li key={language.name}>{language.name}</li>)
                }
            </ul>
            <img src={country.flag} alt='Flag' style={{width: 200, height: 200}} />
            <Weather country={country} />
        </>
    );
};

export default countryDetails;
