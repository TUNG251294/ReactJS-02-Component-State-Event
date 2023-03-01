import React from "react";
import './App.css';
class StateApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            header: "This is header",
            content: "This is content"
        }
    }
    render(){
        return(
            <div>
                <h1>{this.state.header}</h1>
                <h2>{this.state.content}</h2>
            </div>
        );
    }
}
export default StateApp;