import React from "react";

class UnControlledDemo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "尘心",
            flag: true,
        };
        this.nameInputRef = React.createRef();
        this.checkboxInputRef = React.createRef();
        this.fileInputRef = React.createRef()
    }
    render() {
        return (
            <>
                {/* 使用 defaultValue 而不是 value, 使用 ref */}
                <input defaultValue={this.state.name} ref={this.nameInputRef} />
                {/* state 并不会随之改变 */}
                <span>{this.state.name}</span>
                <br />
                <button onClick={this.alertName}>alert name</button>
                <br />
                {/* 使用 defaultChecked 而不是 checked */}
                <input type="checkbox" defaultChecked={this.state.flag} ref={this.checkboxInputRef} />
                <br />
                <input type="file" ref={this.fileInputRef} />
                <button onClick={this.alertFile}>alert file</button>
            </>
        );
    }
    alertName = () => {
        let element = this.nameInputRef.current;    //  获取非受控组件DOM
        alert(element.value)    //  获取非受控组件值
    };
    alertFile = () => {
        let elem = this.fileInputRef.current    //  获取 DOM 节点
        alert(elem.files[0].name)   //  获取 file 文件数据
    }
}

export default UnControlledDemo;
