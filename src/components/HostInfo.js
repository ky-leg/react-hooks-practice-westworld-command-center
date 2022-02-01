import React, { useState } from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({host, setSelected, areas, hosts, addLog}) {
  console.log(host)
  
    const areaLength = areas.map(area => {
    return {
      area: area.name,
      length: hosts.filter(host => host.area === area.name).length
    }
  })

  const cleanedName = name => name.replaceAll("_", " ").replace(/^(.)|\s+(.)/g, c=> c.toUpperCase())

  const [options] = useState(
    areas.map(area => {
      return {
        key: area.name,
        text: cleanedName(area.name),
        value: area.name
      }
    })
  )


  
  

  function handleOptionChange(e, { value }) {

    const areaPop = areaLength.filter(area => area.area === value)[0].length
    const areaCap = areas.filter(area=> area.name === value)[0].limit
    if (areaPop>=areaCap){
      addLog(`The capacity of ${value} has already been met; ${host.firstName} could not be added.`, "WARN")
    }
    if (areaPop<areaCap){
      addLog(`${host.firstName} was moved to ${cleanedName(value)}.`, "NOTIFY")
      fetch(`http://localhost:3002/hosts/${host.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        area: value,
      }),
    })
    .then(r=> r.json())
    .then(r=> setSelected(r))
    }
    
    
    // the 'value' attribute is given via Semantic's Dropdown component.
    // Put a debugger or console.log in here and see what the "value" variable is when you pass in different options.
    // See the Semantic docs for more info: https://react.semantic-ui.com/modules/dropdown/#usage-controlled
  }

  function handleRadioChange() {
    // const updatedHost = {...host, active: !host.active}
    if (host.active){
      addLog(`${host.firstName} was deactivated.`, "NOTIFY")
    }
    if (!host.active){
      addLog(`${host.firstName} was activated.`, "NOTIFY")
    }
    fetch(`http://localhost:3002/hosts/${host.id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        active: !host.active,
      }),
    })
    .then(r=> r.json())
    .then(r=> setSelected(r))
  }

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image
          src={host.imageUrl}
          floated="left"
          size="small"
          className="hostImg"
        />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} | {host.gender==="Male" ? <Icon name="man" /> : <Icon name="woman" />}
            </Card.Header>
            <Card.Meta>
              {/* Sometimes the label should take "Decommissioned". How are we going to conditionally render that? */}
              {/* Checked takes a boolean and determines what position the switch is in. Should it always be true? */}
              <Radio
                onChange={handleRadioChange}
                label={host.active? "Active":"Decommissioned"}
                checked={host.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={host.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
