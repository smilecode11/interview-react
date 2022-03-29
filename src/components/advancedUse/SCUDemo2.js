import React from "react";
import PropTypes from "prop-types";
import { isEqual } from 'lodash'

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
        <Input submitTitle={this.handlerSubmitTitle} />
        <List list={this.state.list} />
      </>
    );
  }
  handlerSubmitTitle = (title) => {
    //  错误使用, 使用 push, pop 等可变值进行赋值操作
    // let list = this.state.list;
    // list.push({
    //   id: `id-${Date.now()}`,
    //   name: title,
    // })

    // 正确使用, "不可变值" 来赋值给 list, 结合 list组件内部的 shouldComponentUpdate 进行判断是否执行组件 render
    let list = this.state.list.concat({
      id: `id-${Date.now()}`,
      name: title,
    })

    this.setState({
      list
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
Input.propTypes = {
  submitTitle: PropTypes.func.isRequired,
};

/** List 组件*/
class List extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log("- render list component -")
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
  /** SUC 在不可变值时使用, 问题在于"不可变值", 不在该生命周期函数*/
  shouldComponentUpdate(nextProps, nextState) {
    console.log(nextProps, this.props.list)
    // 深度比较两引用类型数据是否相等
    if (isEqual(nextProps.list, this.props.list)) {
      return false
    }
    return true //  不相等, 则重新 render
  }
}
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};
