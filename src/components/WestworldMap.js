import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area"

function WestworldMap({areas, hosts, selected, setSelected}) {

  // areas.map(area => console.log(area))

  return <Segment id="map">
    {areas.map(area => {
      return (
        <Area 
        info={area} 
        key={area.name} 
        hosts={hosts} 
        selected={selected} 
        setSelected={setSelected}/>
      )
    })}
  </Segment>;
}

export default WestworldMap;
