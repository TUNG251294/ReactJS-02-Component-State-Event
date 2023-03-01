import React from "react";

class ClickButtonApp extends React.Component{
    constructor(props){
        super (props);
        this.state = {number: 0}
    }
    increment = () => {
        this.setState({number: this.state.number + 1})
    }
    decrement = () => {
        this.setState({number: this.state.number - 1})
    }
    render(){
        return(<div>
            <button type="button" onClick={this.decrement}>Decrement</button>
            {this.state.number}
            <button type="button" onClick={this.increment}>Increment</button>
        </div>);
    }
}
export default ClickButtonApp;