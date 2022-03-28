import React from "react";
import PropTypes from "prop-types";
/** TODOLIST 组件, 父子组件传递数据/方法 demo*/
export default class TodoListDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        { id: 1, name: "尘心" },
        { id: 2, name: "双越" },
      ],
    };
  }
  render() {
    return (
      <>
        {/* 向子组件传递一个函数 */}
        <Input submitTitle={this.handlerSubmitTitle} />
        {/* 向子组件传递一个属性 */}
        <List list={this.state.list} />
      </>
    );
  }
  handlerSubmitTitle = (title) => {
    this.setState({
      list: this.state.list.concat({
        id: `id-${Date.now()}`,
        name: title,
      }),
    });
  };
}

/** Input 组件*/
class Input extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  render() {
    return (
      <>
        <input
          type="text"
          value={this.state.title}
          onChange={(ev) => this.handlerChangeValue(ev.target.value)}
        />
        <button onClick={() => this.onSubmit()}>添加</button>
      </>
    );
  }
  handlerChangeValue(value) {
    this.setState({
      title: value,
    });
  }
  onSubmit() {
    if (!this.state.title) return;
    let { submitTitle } = this.props;
    // 调用父组件传递来的方法
    submitTitle(this.state.title);
    //    重置数据
    this.setState({
      title: "",
    });
  }
}
//  props 类型检查: input 接收一个函数, 必填 submitTitle
Input.propTypes = {
  submitTitle: PropTypes.func.isRequired,
};

/** List 组件*/
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let { list } = this.props;
    return (
      <ul>
        {list.map((item, index) => {
          return (
            <li key={item.id}>
              <span>{item.name}</span>
            </li>
          );
        })}
      </ul>
    );
  }
}
//  props 类型检查, list 接收数组对象, 必填
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
