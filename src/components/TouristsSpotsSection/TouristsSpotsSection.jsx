import { useLoaderData } from "react-router-dom";
import TouristsSpotsCard from "../TouristsSpotsCard/TouristsSpotsCard";


const TouristsSpotsSection = () => {

   const touristsSpots=useLoaderData();

    return (
        <div >
           <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
           {
                touristsSpots.map(touristsSpot=><TouristsSpotsCard key={touristsSpot._id} touristsSpot={touristsSpot}></TouristsSpotsCard>)
            }
           </div>
        </div>
    );
};

export default TouristsSpotsSection;