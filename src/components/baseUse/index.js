import React from "react";
// import JSXBaseDemo from "./JSXBaseDemo";
// import ConditionDemo from "./ConditionDemo";
// import ListDemo from "./ListDemo";
// import EventDemo from "./EventDemo";
// import FormDemo from "./FormDemo";
import PropsDemo from "./PropsDemo";
import StateDemo from "./StateDemo";

class BaseUseDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "尘心",
      age: 27,
    };
  }

  render() {
    return (
      <>
        <div>
          name: {this.state.name} - age:{this.state.age}
        </div>
        {/* <JSXBaseDemo /> */}
        {/* <ConditionDemo /> */}
        {/* <ListDemo /> */}
        {/* <EventDemo /> */}
        {/* <FormDemo /> */}
        <PropsDemo />
        <StateDemo />
      </>
    );
  }
}

export default BaseUseDemo;

// React 组件生命周期图示地址
// https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/