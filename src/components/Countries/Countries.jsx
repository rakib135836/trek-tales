import { useEffect, useState } from "react";
import CountryCard from "../CountryCard/CountryCard";




const Countries = () => {

    const [loadedCountries,setLoadedCountries]=useState([]);

    useEffect(() => {
        fetch("https://trektales-server.vercel.app/countries")
          .then(res => res.json())
          .then(data => {
            setLoadedCountries(data);
          });
      }, []);
    return (
       <div>
        <h1 className="text-center text-2xl font-bold my-7">countries</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
            {
                loadedCountries.map(country=><CountryCard key={country._id} country={country}></CountryCard>)
            }
        </div>
       </div>

    );
};

export default Countries;