import React from "react";
import PropTypes from "prop-types";

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
Input.propTypes = {
  submitTitle: PropTypes.func.isRequired,
};

/** List 组件*/
/** 使用 PureComponent 代替 Component */ 
class List extends React.PureComponent {
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

    /** PureComponent 类似于此加了一个 shouldComponentUpdate, 并在内部实现了浅比较的操作再进行返回确定该组件是否需要 render*/
    // shouldComponentUpdate(nextProps, nextState) {}
  }
}
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};