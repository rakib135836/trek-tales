
import Slider from "../../components/Slider/Slider";
import TouristsSpotsSection from "../../components/TouristsSpotsSection/TouristsSpotsSection";


const Home = () => {
    
    return (
        <div>
            
            <Slider></Slider>
            <h1 className="capitalize font-bold text-3xl text-center my-5">tourists spots </h1>
            <TouristsSpotsSection></TouristsSpotsSection>
        </div>
    );
};

export default Home;