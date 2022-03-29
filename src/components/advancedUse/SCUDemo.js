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
        {/* 添加 Footer */}
        <hr />
        <Footer length={this.state.list.length} text="footer" />
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
List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
};

/** Foot 组件*/
class Footer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    console.log("- Footer render -")
    return (
      <p>
        {this.props.text} :&nbsp;
        {this.props.length}
      </p>
    )
  }
  // 添加 SCU 控制该组件是否重新进行 render
  shouldComponentUpdate(nextProps, nextState) {
    if (nextProps.text !== this.props.text || nextProps.length !== this.props.length) { //  添加条件判断确定是否进行 render
      return true
    } else {
      return false
    }
  }

  //  React 默认: 父组件有更新, 子组件无条件也更新!
  //  性能优化对于 React 更加重要
  //  SUC 一定要每次都用吗? -- 需要的时候可以进行优化, 如上所示
}
Footer.propTypes = {
  text: PropTypes.string.isRequired,
  length: PropTypes.number.isRequired
}
