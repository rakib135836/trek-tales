import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";




const Countries = () => {

    const [loadedCountries,setLoadedCountries]=useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/countries")
          .then(res => res.json())
          .then(data => {
            setLoadedCountries(data);
          });
      }, []);
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {
                loadedCountries.map(country=><CountryCard key={country._id} country={country}></CountryCard>)
            }
        </div>
    );
};

export default Countries;