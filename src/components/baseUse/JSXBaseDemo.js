import React from "react";

class JSXBaseDemo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "尘 心",
      imgUrl: `https://img0.baidu.com/it/u=329459380,3434082451&fm=253&fmt=auto&app=120&f=JPEG?w=700&h=394`,
      flag: true,
    };
  }

  render() {
    //  获取变量
    // const pElem = <p>{this.state.name}</p>;
    // return pElem;
    //  表达式
    // const exprElem = <p>{ this.state.flag ? 'yes':'no' }</p>
    // return exprElem;
    //    子元素
    const imgElem = (
      <>
        <p> 我的头像 </p>
        <img src={this.state.imgUrl} alt="我的头像" />
      </>
    );
    return imgElem;
    //    class
    // const classELem = <p className="{title}"></p>
    //  style
    // const styles = { fontSize: "20px", color: "skyblue" };
    // const pElem = < p style={styles}>{this.state.name}</p>;
    // const pElem = <p style={{ fontSize: '20px', color: 'skyblue' }}>{ this.state.name}</p>
    // return pElem;
    //    原生 html
    // const rawHtml = `<span>富文本内容<i>斜体</i><b>加粗</b></span>`;
    // const rawHtmlData = {
    //   __html: rawHtml, //  注意这是必须的格式
    // };
    // const rawHtmlElem = (
    //   <>
    //     <p dangerouslySetInnerHTML={rawHtmlData}></p>
    //     <p>{rawHtml}</p>
    //   </>
    // );
    // return rawHtmlElem;
    //  加载组件
    // const componentElem = (
    //   <>
    //     <p>JSX 中加载一个组件</p>
    //     <hr />
    //     <List />
    //   </>
    // );
    // return componentElem;
  }
}

export default JSXBaseDemo;
