import React from "react";
import "../stylesheets/Area.css";
import HostList from "./HostList"

function Area({info, hosts, selected, setSelected}) {

  const {name, limit, auth_req} = info

  const cleanedName = name.replaceAll("_", " ")
  .replace(/^(.)|\s+(.)/g, c=> c.toUpperCase())

 

  return (
    <div
      className="area"
      id={
        name
      }
    >
      <h3 className="labels">
        {cleanedName}
      </h3>
      <HostList 
      location={name} 
      selected={selected} 
      setSelected={setSelected} 
      hosts={hosts}/>
    </div>
  );
}

Area.propTypes = {
  hosts: function (props) {
    if (props.hosts.length > props.limit) {
      throw Error(
        `HEY!! You got too many hosts in ${props.name}. The limit for that area is ${props.limit}. You gotta fix that!`
      );
    }
  },
};

export default Area;
