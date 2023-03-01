import { Component } from 'react';
export default class Calculator extends Component{
    constructor(props){
        super(props);
        this.state = {
            firstNumber: 0,
            secondNumber: 0,
            result: 0
        }
    }

    inputFirst = (e) => {
            this.setState({
                firstNumber: e.target.value
            });
    }

    inputSecond = (e) => {
        this.setState({
            secondNumber: e.target.value
        });
    }

    handleMath = (e) => {
        let operator = e.target.value;
        switch(operator){
            case "+" : {
                this.setState({result: parseInt(this.state.firstNumber) + parseInt(this.state.secondNumber)});
                break;
            }
            case "-" : {
                this.setState({result: parseInt(this.state.firstNumber) - parseInt(this.state.secondNumber)});
                break;
            }
            case "*" : {
                this.setState({result: parseInt(this.state.firstNumber) * parseInt(this.state.secondNumber)});
                break;
            }
            case "/" : {
                this.setState({result: parseInt(this.state.firstNumber) / parseInt(this.state.secondNumber)});
                break;
            }
            default : {
                break;
            }
        }
    }

    render(){
        return(
            <div>
                <input type = "number" onChange={this.inputFirst} placeholder="0"></input><br></br>
                <input type = "number" onChange={this.inputSecond} placeholder="0"></input>
                <p>Result: {this.state.result}</p>
                <button onClick={this.handleMath} value = "+">+</button>
                <button onClick={this.handleMath} value = "-">-</button>
                <button onClick={this.handleMath} value = "*">*</button>
                <button onClick={this.handleMath} value = "/">/</button>
            </div>
        );
    }
}
