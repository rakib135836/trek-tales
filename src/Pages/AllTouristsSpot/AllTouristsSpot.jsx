
// kichu somossa ache update korar age fix korte hobe 


import  { useState } from 'react';
import PropTypes from 'prop-types';
import { useLoaderData } from "react-router-dom";
import AllSpotCard from "../../components/AllSpotCard/AllSpotCard";

const AllTouristsSpot = () => {
    const spots = useLoaderData();
    const [sortBy, setSortBy] = useState(null);

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const sortedSpots = spots.slice().sort((a, b) => {
        if (sortBy === 'asc') {
            return a.averageCost - b.averageCost;
        } else if (sortBy === 'desc') {
            return b.averageCost - a.averageCost;
        } else {
            return 0;
        }
    });

    return (
        <div>
            <h1 className="capitalize font-bold text-3xl text-center my-5">all tourists spots </h1>

            <div className="mb-4 text-center">
                <label htmlFor="sort">Sort by:</label>
                <select id="sort" onChange={handleSortChange}>
                    <option value="">Select</option>
                    <option value="asc">Low to High</option>
                    <option value="desc">High to Low</option>
                </select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2">
                {sortedSpots.map((spot) => (
                    <AllSpotCard key={spot._id} spot={spot} />
                ))}
            </div>
        </div>
    );
};

AllTouristsSpot.propTypes = {
    spots: PropTypes.arrayOf(
        PropTypes.shape({
            _id: PropTypes.string.isRequired,
            image: PropTypes.string.isRequired,
            spotName: PropTypes.string.isRequired,
            averageCost: PropTypes.number.isRequired,
            visitors: PropTypes.number.isRequired,
            travelTime: PropTypes.string.isRequired,
            seasonality: PropTypes.string.isRequired,
        })
    ).isRequired,
};

export default AllTouristsSpot;
