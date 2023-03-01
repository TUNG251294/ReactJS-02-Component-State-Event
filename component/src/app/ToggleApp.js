import React from "react";
class Toggle extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            isOn: true
        };
        // this.handleClick = this.handleClick.bind(this);
    }
    // Nếu quên ràng buộc this.handleClick và truyền nó vào onClick, this sẽ có giá trị là undefined khi phương thức này được thực thi
    // handleClick(){
    //     this.setState(
    //         prevState => ({isOn: !prevState.isOn})
    //         );
    // }
    // Arrow function được thiết kế để giữ nguyên giá trị của this bên trong nó, vì vậy không cần phải ràng buộc (bind) this
    handleClick = () => {
        this.setState(
            prevState => ({isOn: !prevState.isOn})
            );
    }

    render(){
        return(
            <button onClick={this.handleClick}>
                {this.state.isOn ? 'ON' : 'OFF'}
            </button>
        );
    }
}
export default Toggle;