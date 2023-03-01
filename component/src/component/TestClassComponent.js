import React from "react";

class TestClassComponent extends React.Component{
    render(){
        return <h1>Total: {this.props.firstNumber + this.props.secondNumber}</h1>;
    }
}
export default TestClassComponent;