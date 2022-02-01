import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import "../stylesheets/App.css";
import WestworldMap from "./WestworldMap"
import Headquarters from "./Headquarters"


function App() {

  const [areas, setAreas] = useState([])
  const [hosts, setHosts] = useState([])
  const [selected, setSelected] = useState("")
  
function activateAll(allActive){
  console.log("all active", allActive)
  if (allActive){
    setHosts(hosts.map(host => {
      return {
        ...host, 
        active: false
      }
    }))
  }
  if (!allActive){
    setHosts(hosts.map(host => {
      return {
        ...host, 
        active: true
      }
    }))
  }
  }



  useEffect(() => {
    fetch('http://localhost:3002/hosts')
    .then(r => r.json())
    .then(r => setHosts(r))
  }, [selected])

  useEffect(() => {
    fetch('http://localhost:3002/areas')
    .then(r=> r.json())
    .then(r => setAreas(r))
  }, [selected])

  // console.log(selected)

  return (
    <Segment id="app">
      <WestworldMap 
      hosts={hosts} 
      selected={selected} 
      setSelected={setSelected} 
      areas={areas}/>
      <Headquarters 
      activateAll={activateAll}
      selected={selected}
      setSelected={setSelected}
      hosts={hosts}
      setAreas={setAreas}
      areas={areas}
      />
    </Segment>
  );
}

export default App;
