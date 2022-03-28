import React from "react";

export default class ListDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
  }

  render() {
    return (
      <ul>
        {this.state.list.map((item, key) => {
          // 这里的 key 和 vue 的 key 意义相似, 不能是 index 或 random
          return (
            <li key={item.id}>
              id:{item.id} key:{key} name:{item.name}
            </li>
          );
        })}
      </ul>
    );
  }
}
