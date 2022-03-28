import React from "react";

export default class FormDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "尘心",
      age: 18,
      gender: "male",
      options: ["吃饭", "睡觉", "打豆豆"],
      flag: true,
    };
  }

  render() {
    //    受控组件
    return (
      <>
        {/* input */}
        <p>{this.state.name}</p>
        <label htmlFor="inputName">用户名</label>
        <input
          id="inputName"
          value={this.state.name}
          onChange={(ev) => this.handlerNameChange(ev.target.value)}
        />
        {/* select */}
        <p>{this.state.gender}</p>
        <label htmlFor="genderSelect">性别</label>
        <select
          id="genderSelect"
          value={this.state.gender}
          onChange={(ev) => this.handlerGenderChange(ev.target.value)}
        >
          <option value="male">男</option>
          <option value="female">女</option>
        </select>
        {/* checkbox */}
        <div>
          <input
            type="checkbox"
            checked={this.state.flag}
            onChange={(ev) => this.handlerFlagChange(ev.target.checked)}
          />
          <p>{this.state.flag.toString()}</p>
        </div>
        {/* radio */}
        <label htmlFor="genderMale">male</label>
        <input
          id="genderMale"
          type="radio"
          value="male"
          name="gender"
          checked={this.state.gender === "male"}
          onChange={(ev) => this.handlerRadioChange(ev.target.checked, "male")}
        />
        <label htmlFor="genderFemale">female</label>
        <input
          id="genderFemale"
          type="radio"
          name="gender"
          value="female"
          checked={this.state.gender === "female"}
          onChange={(ev) =>
            this.handlerRadioChange(ev.target.checked, "female")
          }
        />
      </>
    );
  }
  handlerNameChange(value) {
    this.setState({
      gender: value,
    });
  }
  handlerGenderChange(value) {
    this.setState({
      gender: value,
    });
  }
  handlerFlagChange(value) {
    this.setState({
      flag: value,
    });
  }
  handlerRadioChange(value, type) {
    this.setState({
      gender: type,
    });
  }
}
