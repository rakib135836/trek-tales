
import AdventureActivitiesSection from "../../components/AdventureActivitiesSection/AdventureActivitiesSection";
import Countries from "../../components/Countries/Countries";
import Slider from "../../components/Slider/Slider";
import TouristsSpotsSection from "../../components/TouristsSpotsSection/TouristsSpotsSection";
import TravelTipsSection from "../../components/TravelTipsSection/TravelTipsSection";
import TypeWriter from "../../components/TypeWriter/TypeWriter";


const Home = () => {
    
    return (
        <div>
            
            <Slider></Slider>
           <div className="text-center">
           <TypeWriter></TypeWriter>
           </div>
            <h1 className="capitalize font-bold text-3xl text-center my-5">tourists spots </h1>
            <TouristsSpotsSection></TouristsSpotsSection>
            <Countries></Countries>
            <TravelTipsSection></TravelTipsSection>
            <AdventureActivitiesSection></AdventureActivitiesSection>
        </div>
    );
};

export default Home;