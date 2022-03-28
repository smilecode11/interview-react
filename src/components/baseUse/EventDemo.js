import React from "react";

class EventDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Hello, React!",
      list: [
        {
          id: 1,
          name: "尘心",
        },
        {
          id: 2,
          name: "小白",
        },
        {
          id: 3,
          name: "秋山",
        },
      ],
    };

    // 1. 修改普通函数this指向, 建议于此进行绑定. 如此只会在实例化时执行一次
    this.clickHandler = this.clickHandler.bind(this);
  }

  render() {
    return (
      <>
        <div onClick={this.clickHandler}>clickHandler: {this.state.title}</div>
        {/* 2. 也可以在此处进行 this 指向的绑定更新, 会稍微影响性能, 多次执行会创建函数 */}
        <div onClick={this.clickHandler2.bind(this)}>
          clickHandler2: {this.state.title}
        </div>
        {/* 静态方法(箭头函数形式) */}
        <div onClick={this.clickHandler3}>
          clickHandler3: {this.state.title}
        </div>
        <br />
        <br />
        <a href="https://www.baidu.com" onClick={this.clickHandler4}>
          点我!!
        </a>
        {/* 事件传参 */}
        <ul>
          {this.state.list.map((item, index) => (
            // <li onClick={this.clickHandler5.bind(this, item, index)} key={item.id} >
            <li
              onClick={(event) => this.clickHandler5(item, index, event)}
              key={item.id}
            >
              {item.name} - {index}
            </li>
          ))}
        </ul>
      </>
    );
  }

  //  普通方法, this 默认是 undefined, 需要在实例化是进行手动绑定
  clickHandler() {
    this.setState({
      title: "Hello, clickHandler",
    });
  }

  clickHandler2() {
    this.setState({
      title: "Hello, clickHandler2",
    });
  }

  //  3.使用静态方法进行 this 指向的绑定
  clickHandler3 = () => {
    //    静态方法中 this 默认永远指向实例
    this.setState({
      title: "Hello, clickHandler3",
    });
  };

  //  函数默认参数 event
  clickHandler4 = (event) => {
    event.preventDefault(); //  阻止默认行为
    event.stopPropagation(); // 阻止冒泡
    console.log("target", event.target); //  指向当前元素, 即当前触发元素
    console.log("current target", event.currentTarget); //  指向当前元素, 假象!!!

    //    注意, event 其实是 React 封装的. 可以看 event.__proto__.constructor 是 SyntheticBaseEvent. 是 React 内部封装的组合事件对象
    console.log("event", event); //  不是原生 Event, 原生是 MouseEvent
    console.log("event.__proto__.constructor", event.__proto__.constructor);

    //  原生 event 如下, 通过 event.nativeEvent 获取
    console.log("nativeEvent", event.nativeEvent);
    console.log("nativeEvent target", event.nativeEvent.target);
    console.log("nativeEvent current target", event.nativeEvent.currentTarget);

    //  *(重点)
    //  1. event 是 SyntheticBaseEvent, 模拟出 DOM 事件所有能力
    //  2. event.nativeEvent 是 PointerEvent, PointerEvent 的 constructor 原生事件对象(MouseEvent)
    //  3. 所有事件, 都被挂载到 root 上
    //  4. 和 DOM 事件不一样, 和 Vue 事件也不一样
  };

  //	函数传参
  clickHandler5(item, index, event) {
    console.log("clickHandler5 函数传参数", item, index, event);
  }
}

export default EventDemo;
