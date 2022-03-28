import React from "react";

export default class ConditionDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: "white",
    };
  }
  render() {
    const blackBtn = <button className="btn-black">black btn</button>;
    const whiteBtn = <button className="white-btn">white btn</button>;

    // //  if else
    // if (this.state.theme === "black") {
    //   return blackBtn;
    // } else {
    //   return whiteBtn;
    // }

    //  三元表达式
    // return <>{this.state.theme === "black" ? blackBtn : whiteBtn}</>;

    //  &&
    return (
      <>
        {this.state.theme === "black" && blackBtn}
        {this.state.theme === "white" && whiteBtn}
      </>
    );
  }
}
