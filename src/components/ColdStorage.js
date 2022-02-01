import React from "react";
import { Segment } from "semantic-ui-react";
import HostList from "./HostList"

function ColdStorage({hosts, selected, setSelected}) {
  return (
    <Segment.Group className="HQComps">
      <Segment compact>
        <h3 className="labels">ColdStorage</h3>
      </Segment>
      <Segment compact>
        <HostList 
        location={"coldstorage"} 
        hosts={hosts} 
        selected={selected} 
        setSelected={setSelected}/> 
      </Segment>
    </Segment.Group>
  );
}

export default ColdStorage;
