import PropTypes from 'prop-types'; 

const TouristsSpotsCard = ({ touristsSpot }) => {
    const { image, spotName, countryName, location, avarageCost, visitors } = touristsSpot;
    return (
        <div>
            <div className='flex flex-col p-5 border border-gray-400 border-solid  rounded-lg
         cursor-pointer transition duration-300 ease-out transform hover:shadow-2xl hover:scale-105 my-8'>

            <div className='flex-grow'>
                <img  className="h-60 w-full" src={image} alt="" />
                <div className="text-2xl font-bold text-black">
                    {spotName}
                    {countryName}
                </div>
            </div>

            <div>
                <h1 className='text-2xl font-bold text-black'>{location}</h1>
                <hr />
                <div className='flex flex-row justify-between'>
                    <p>{avarageCost}</p>
                    <div className='flex items-center gap-2'>
                        <p>{visitors}</p>
                       
                    </div>
                </div>
            </div>

            <div className="form-control mt-6">
               <button className="btn btn-primary">view property</button>
            </div>
            {/* <Link to={`/property/${id}`}></Link> */}
        </div>
        </div>
    );
};

// Define props validation
TouristsSpotsCard.propTypes = {
    touristsSpot: PropTypes.shape({
        image: PropTypes.string.isRequired,
        spotName: PropTypes.string.isRequired,
        countryName: PropTypes.string.isRequired,
        location: PropTypes.string.isRequired,
        avarageCost: PropTypes.number.isRequired,
        visitors: PropTypes.number.isRequired,
    }).isRequired,
};

export default TouristsSpotsCard;
