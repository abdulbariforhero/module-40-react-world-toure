import { useState } from 'react';
import './country.css'
import CountryDetails from '../../CountryDetails/CountryDetails';
import CountryData from '../../countryData/CountryData';

const Country = (props) => {
    const {country, handleVisitedCountry, handleVisitedFlags} = props;
    const {name , flags, population, area} = country;

    const [visited , setVisited] = useState(false)

    const handleVisited =() => {
        setVisited(!visited)
    }

    const passWithParms = () => handleVisitedCountry(country) 
    // console.log(handleVisitedCountry);


    return (
        <div className={`country ${visited ? 'visited': 'nonVisited'}`}>
            <h3 style={{color: visited ?  'purple' : 'white'}}>{name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <button onClick={() => handleVisitedCountry(country)} >Mark Visited</button>
            <br />
            <button onClick={() => handleVisitedFlags(country.flags.png)}>add  Visited Flage</button>
            <br />
            <button onClick={handleVisited}>{visited? 'Visited' : 'Done'}</button>
            {visited ? 'I have visited this country' : 'I want to visit'}
            <CountryDetails
            {...props}
            ></CountryDetails>
            <CountryData
            {...props}
            ></CountryData>
        </div>
    );
};

export default Country;