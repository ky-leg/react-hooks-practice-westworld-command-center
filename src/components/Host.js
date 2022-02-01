import React from "react";
import { Card } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({host, selected, setSelected}) {

  // console.log("host name", host.firstName, selected.firstName===host.firstName)

  /* NOTE: The className "host selected" renders a different style than simply "host". */
  return (
    <Card
      className= {selected.firstName===host.firstName? "host selected":"host"}
      onClick={() => setSelected(host)}
      image={host.imageUrl}
      raised
      link
    />
  );
}

export default Host;
