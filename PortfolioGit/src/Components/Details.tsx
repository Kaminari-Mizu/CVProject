import Accordions from "./Accordion";
import { FeaturesTitle } from "./FeaturesTitle"
import { StatsSegments } from "./StatsSegments";

//const listItems = Data.achievements;


function Details() {
    return (
      <div>
        <FeaturesTitle/>
        <StatsSegments/>
        <Accordions/>
        </div>
    )
  }
  
  export default Details