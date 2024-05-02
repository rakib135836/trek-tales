import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addedSpots } from "../../utility/localStorage";

const SpotsDetails = () => {
    const spots = useLoaderData();
    const { _id } = useParams(); 
    const idInt = _id;

    const [spot, setSpot] = useState(null);
  
    useEffect(() => {
        const spot1 = spots.find(spot => spot._id === idInt); 
        setSpot(spot1);
    }, [_id, spots]); 

    useEffect(() => {
        addedSpots(idInt); 
    }, [idInt]);

    console.log(spot);

    return (
        <div>
            <div className="card  card-side bg-base-100 shadow-xl">
        <figure><img src={spot?.image} alt="" /></figure>
        <div className="card-body">

          <h2 className="card-title">{spot?.spotName}</h2>
          <p>country name  : {spot?.countryName}</p> <br /> <hr />
          <p className="font-bold"> location:{spot?.location}</p>

          <span className="font-bold"> </span> <p> description:{spot?.shortDescription}</p>

          <div className="flex flex-row ">
            <p className="font-bold"></p>
            <p className="text-green-600"># averageCost:{spot?.averageCost}</p>
            <p className="text-green-600"># travel time:{spot?.travelTime}</p>
          </div><br />

          <table>
            <tbody>
              <tr>
                <td>seasonality</td>
                <td className="font-bold">seasonality:{spot?.seasonality}</td>
              </tr>
              <tr>
                <td>visitors </td>
                <td className="font-bold">visitors:{spot?.visitors}</td>
              </tr>
              {/* <tr>
                <td></td>
                <td className="font-bold">{spot?.location}</td>
              </tr> */}
            </tbody>
          </table>





        </div>
      </div>
        </div>
    );
};

export default SpotsDetails;
