import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host"

function HostList({location, hosts, selected, setSelected}) {

  

  if(location==="coldstorage"){
    const coldStorageList = hosts.filter(host => host.active === false)
    .map(host => {
      return (
        <Host 
        key={host.firstName} 
        selected={selected}
        setSelected={setSelected}
        host={host} />
      )
    })

    // console.log("storage", coldStorageList)

    return (
      <Card.Group itemsPerRow={6}>{coldStorageList}</Card.Group>
    );
  }

  else{
    

    const areaList = hosts.filter(host => host.active ===true)
    .filter(host => host.area === location)
    .map(host => {
      return (
        <Host 
        key={host.firstName} 
        selected={selected}
        setSelected={setSelected}
        host={host}/>
      )
    })
    // console.log("area list", areaList)
    return (
      <Card.Group itemsPerRow={6}>{areaList}</Card.Group>
    );
  }

}
    
export default HostList;
