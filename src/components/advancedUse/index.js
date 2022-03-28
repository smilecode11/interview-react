import React from "react";
// import UnControlledDemo from "./UnControlledDemo";
// import PortalsDemo from './PortalsDemo'
// import ContextDemo from "./ContextDemo";
import LazyDemo from "./LazyDemo";

class AdvancedUse extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        {/* <UnControlledDemo /> */}
        {/* <PortalsDemo>Portals Demo</PortalsDemo> */}
        {/* <ContextDemo /> */}
        <LazyDemo />
      </>
    );
  }
}

export default AdvancedUse;
