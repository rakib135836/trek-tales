import PropTypes from 'prop-types';

const CountryCard = ({ country }) => {
    const { image, country_name, description } = country;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure><img src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{country_name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                       
                    </div>
                </div>
            </div>
        </div>
    );
};

CountryCard.propTypes = {
    country: PropTypes.shape({
        image: PropTypes.string.isRequired,
        country_name: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired
    }).isRequired
};

export default CountryCard;
