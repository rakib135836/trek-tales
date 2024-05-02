import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TouristsSpotsCard = ({ touristsSpot }) => {
    const { image, spotName, countryName, location, averageCost, visitors, _id } = touristsSpot; 
    return (
        <div>
            <div className='flex flex-col p-5 border border-gray-400 border-solid  rounded-lg
         cursor-pointer transition duration-300 ease-out transform hover:shadow-2xl hover:scale-105 my-8'>

                <div className='flex-grow'>
                    <img className="h-60 w-full" src={image} alt="" />
                    <div className="text-2xl font-bold text-black">
                        {spotName}
                        {countryName}
                    </div>
                </div>

                <div>
                    <h1 className='text-2xl font-bold text-black'>location:{location}</h1> <br />
                    <hr />
                    <div className='flex flex-row justify-between'>
                        <p> averageCost:{averageCost}</p> 
                        <div className='flex items-center gap-2'>
                            <p> visitors:{visitors}</p>

                        </div>
                    </div>
                </div>

                <div className="form-control mt-6">
                    <Link to={`/spot/${_id}`}><button className="btn btn-primary">view details</button></Link>
                </div>

            </div>
        </div>
    );
};


TouristsSpotsCard.propTypes = {
    touristsSpot: PropTypes.shape({
        image: PropTypes.string.isRequired,
        spotName: PropTypes.string.isRequired,
        countryName: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        averageCost: PropTypes.string.isRequired, 
        visitors: PropTypes.string.isRequired,
        _id: PropTypes.string.isRequired
    }).isRequired,
};

export default TouristsSpotsCard;
