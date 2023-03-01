import React from "react";
import Hello from "../component/Hello";
class AlertUnmountApp extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            display: true
        };
    }
    // Arrow function được thiết kế để giữ nguyên giá trị của this bên trong nó, vì vậy không cần phải ràng buộc (bind) this
    delete = () => {
        this.setState({display: false});
    }
    render(){
        let comp;
        if (this.state.display){
            comp = <Hello />
        }
        return(
            <div style={{textAlign: 'center'}}>
                {comp}
                <button onClick={this.delete}>
                    Delete the component
                </button>
            </div>
        );
    }
}
export default AlertUnmountApp;