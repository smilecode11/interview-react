import React from "react";
// import UnControlledDemo from "./UnControlledDemo";
// import PortalsDemo from './PortalsDemo'
// import ContextDemo from "./ContextDemo";
// import LazyDemo from "./LazyDemo";
// import SCUDemo from './SCUDemo'
// import SUCDemo2 from './SCUDemo2'
// import PureComponentDemo from './PureComponentDemo'
import HOCDemo from "./HOCDemo";

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
        {/* <LazyDemo /> */}
        {/* <SCUDemo /> */}
        {/* <SUCDemo2 /> */}
        {/* <PureComponentDemo /> */}
        <HOCDemo />
      </>
    );
  }
}

export default AdvancedUse;
