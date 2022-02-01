import React, {useState} from "react";
import { Segment, Button } from "semantic-ui-react";
import { Log } from "../services/Log";

function LogPanel({activateAll, hosts, logs}) {

  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs().map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      <Button 
      onClick={() => activateAll(hosts.filter(host => host.active===true).length===15)}
      fluid color={"red"} 
      content={hosts.filter(host => host.active===true).length===15? 
        "DEACTIVATE ALL":"ACTIVATE ALL"} />
    </Segment>
  );
}

export default LogPanel;
