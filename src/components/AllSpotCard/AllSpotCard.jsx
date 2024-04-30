
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


const AllSpotCard = ({ spot }) => {
    const { image, spotName, averageCost, visitors, travelTime, seasonality,_id} = spot;
    return (
        <div>

{/* ----------- */}







            <div className='flex flex-col p-5 border border-gray-400 border-solid rounded-lg cursor-pointer transition duration-300 ease-out transform hover:shadow-2xl hover:scale-105 my-8'>
                <div className='flex-grow'>
                    <img src={image} alt="" />
                    <div className="text-2xl font-bold text-black">
                        {spotName}
                        {averageCost}
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl font-bold text-black'>{visitors}</h1>
                    <hr />
                    <div className='flex flex-row justify-between'>
                        <p>{travelTime}</p>
                        <div className='flex items-center gap-2'>
                            <p>{seasonality}</p>
                        </div>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <Link to={`/spot/${_id}`}><button className="btn btn-primary">view property</button></Link>
                </div>
            </div>
        </div>
    );
};

AllSpotCard.propTypes = {
    spot: PropTypes.shape({
        image: PropTypes.string.isRequired,
        spotName: PropTypes.string.isRequired,
        averageCost: PropTypes.string.isRequired,
        visitors: PropTypes.string.isRequired,
        travelTime: PropTypes.string.isRequired,
        seasonality: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired,
};

export default AllSpotCard;
