import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";
import './countrys.css'

const Counties = () => {
    const [Countries, setCountries] = useState([])
    const [visitedCountries, setVisitedCountries] = useState([])
    const [visitedFlags, setVisitedFlags] = useState([])


    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])


    const handleVisitedCountry = (country) => {
        console.log('add this to your visited country');        
        const newVisitedCountries = [...visitedCountries, country];
        setVisitedCountries(newVisitedCountries)
    };

    const handleVisitedFlags = flag => {
        filterOlderFlagsWithNewFlag(flag)
        const newVisitedFlags = [...visitedFlags, flag]
        setVisitedFlags(newVisitedFlags)
    }

    //remove flag fro new array
    // use filter to select all the elements except the one you want to remove
    const filterOlderFlagsWithNewFlag = (flag) => {
        const newFlags = visitedFlags.filter((flg)=> flg != flag);
        setVisitedFlags(newFlags)
    }

    return (
        <div >
            <h3>Counties {Countries.length}</h3>
            <div>
                <h5>Visited Countries {visitedCountries.length}</h5>
                <ul>
                    {
                        visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
                    }
                </ul>
                <div className="flag-container">
                    {
                        visitedFlags.map((flag, idx) => <img key={idx} src={flag}></img>)
                    }
                </div>
            </div>
       <div className="country-countianer">
       {
                Countries.map(country => <Country key={country.cca3}                    
                    country={country}
                    handleVisitedCountry={handleVisitedCountry}
                    handleVisitedFlags={handleVisitedFlags} ></Country> )                   
            }    
        </div>        
        </div>
    );
};

export default Counties;