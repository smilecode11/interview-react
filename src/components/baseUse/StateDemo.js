import React from "react";

class StateDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      list1: [1, 2, 3, 4, 5],
      list2: [1, 2, 3, 4, 5],
      list3: [1, 2, 3, 4, 5],
      list4: [1, 2, 3, 4, 5],
      list5: [1, 2, 3, 4, 5],
      obj1: { chenxin: { name: "chenxin", age: 27 } },
      obj2: { new1: { title: "新闻标题" } },
    };
  }
  render() {
    return (
      <>
        <div>count: {this.state.count}</div>
        <button onClick={(ev) => this.handlerIncreatement(ev)}>+1</button>
      </>
    );
  }
  handlerIncreatement(ev) {
    ev.stopPropagation();

    //    * 不要直接修改 state 数据, 使用 "不可变数据" (不影响原数据) ------------------------
    //    this.state.count ++   //  错误

    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // this.setState({
    //   count: this.state.count + 1,
    // });
    // setTimeout(() => {
    //   console.log(this.state.count); // 打印 1, 当 setState 传入的值是一个对象时, 其操作会被合并, 类似 Object.assign({count:1},{count:1})
    // }, 0);

    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
    this.setState((prevState, props) => {
      return {
        count: prevState.count + 1,
      };
    });
    setTimeout(() => {
        console.log(this.state.count); // 打印 3, 当 setState 传入的值是一个 函数时, 操作不会被合并
      }, 0);
    //    * setTimeout 中 setState 是同步的
    // setTimeout(() => {
    //   this.setState({
    //     count: this.state.count + 1,
    //   });
    //   console.log(this.state.count); //  setState 是异步的. 此处打印不能直接拿到最新值
    // }, 0);

    //    操作数组, 对象常用形式
    // const list5Copy = this.state.list5.slice();
    // this.setState({
    //   list1: this.state.list1.concat(100), //  追加
    //   list2: [...this.state.list2, 100], //  追加
    //   list3: this.state.list3.slice(0, 3), //  截取
    //   list4: this.state.list4.filter((item) => item <= 3),
    //   list5: list5Copy,
    // });
    //  注意, 不能直接堆 this.state.list 进行 push pop splice 扥, 这样违背了 "不可变值"

    //  不可变值 - 对象操作
    // this.setState({
    //   obj1: Object.assign({}, this.state.obj1, { shuangyue: { name: "双越" } }),
    //   obj2: { ...this.state.obj2, date: Date.now() },
    // });
  }
  bodyClickHanlder = () => {
    this.setState({
      count: this.state.count + 1,
    });
    console.log(this.state.count);
  };
  //    生命周期 - 组件渲染时
  componentDidMount() {
    //    * 自定义的 dom 事件, setState 也是同步的
    document.body.addEventListener("click", this.bodyClickHanlder);
  }
  //  生命周期 -  组件即将销毁时
  componentWillUnmount() {
    document.body.removeEventListener("click", this.bodyClickHanlder);
  }
}

export default StateDemo;
