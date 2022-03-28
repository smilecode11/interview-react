import React from "react";
import UnControlledDemo from "./UnControlledDemo";
import PortalsDemo from './PortalsDemo'

class AdvancedUse extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <UnControlledDemo />
        <PortalsDemo>Portals Demo</PortalsDemo>
      </>
    );
  }
}

export default AdvancedUse;
