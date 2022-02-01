import React from "react";
import { Segment, Image } from "semantic-ui-react";
import * as Images from "../services/Images";
import HostInfo from "./HostInfo";

function Details({selected, setSelected, areas, setAreas, hosts, addLog}) {

  // console.log("areas in details", areas)

  // We'll render the logo if no host is selected. But if a host does get selected....
  // Watch the video to see how this works in the app.
  // console.log("inside of Details",selected)
  return (
    <Segment id="details" className="HQComps">
      {(selected === "") ? 
      <Image 
      size="medium" 
      src={Images.westworldLogo}/> : 
      <HostInfo 
      host={selected}
      setSelected={setSelected}
      hosts={hosts}
      areas={areas}
      addLog={addLog}/>}
    </Segment>
  );
}

export default Details;
