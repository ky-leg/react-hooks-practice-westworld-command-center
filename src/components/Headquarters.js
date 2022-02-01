import React, { useState } from "react";
import { Grid } from "semantic-ui-react";
import Details from "./Details";
import "../stylesheets/Headquarters.css";
import ColdStorage from "./ColdStorage";
import { Log } from "../services/Log";

import LogPanel from "./LogPanel"

function Headquarters({activateAll, selected, setSelected, hosts, areas, setAreas}) {

  const [logs, setLogs] = useState([Log.notify("Beginning Sequence")]);
    // logs.unshift(Log.warn("This soup is black not"));
    // logs.unshift(Log.notify("This is an example of a notify log"));
    // logs.unshift(Log.error("This is an example of an error log"));

  function logReturn() {
   
    return logs;
  }

  function addLog(msg, type){
    console.log(msg, type)
    if (type === "WARN"){
      console.log('this')
      // logs.unshift(Log.warn(msg))
      setLogs([...logs, Log.warn(msg)])
    }
    if (type ==="NOTIFY"){
      setLogs([...logs, Log.notify(msg)])
    }
  }

  return (
    <Grid celled="internally">
      <Grid.Column width={8}>
        <ColdStorage 
        selected={selected} 
        setSelected={setSelected} 
        hosts={hosts}/>
      </Grid.Column>
      <Grid.Column width={5}>
        <Details 
        selected={selected}
        setSelected={setSelected}
        setAreas={setAreas}
        hosts={hosts}
        areas={areas}
        addLog={addLog}/>
      </Grid.Column>
      <Grid.Column width={3}>
        <LogPanel 
        activateAll={activateAll}
        hosts={hosts}
        logs={logReturn}/> 
      </Grid.Column>
    </Grid>
  );
}

export default Headquarters;
