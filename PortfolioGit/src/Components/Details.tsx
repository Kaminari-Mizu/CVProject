import Accordions from "./Accordion";
import { FeaturesTitle } from "./FeaturesTitle"
import { StatsSegments } from "./StatsSegments";
import Data from '../assets/data.json';

const listItems = Data.groceries;


function Details() {
    return (
      <div>
        <FeaturesTitle/>
        <StatsSegments/>
        <Accordions AccordData={listItems}/>
        </div>
    )
  }
  
  export default Details