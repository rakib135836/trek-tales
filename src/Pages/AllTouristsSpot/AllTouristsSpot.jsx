import { useLoaderData } from "react-router-dom";
import AllSpotCard from "../../components/AllSpotCard/AllSpotCard";


const AllTouristsSpot = () => {

    const spots=useLoaderData();
    return (
        <div>
           <h1 className="capitalize font-bold text-3xl text-center my-5">all tourists spots </h1>

           <div className="grid  grid-cols-1 lg:grid-cols-3 md:grid-cols-2" >
            {
                spots.map(spot=><AllSpotCard key={spot._id} spot={spot}></AllSpotCard>)
            }
           </div>
        </div>
    );
};

export default AllTouristsSpot;