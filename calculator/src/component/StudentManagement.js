import React from "react";
import '../App.css'

class StudentManagement extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            studentList: [{name: "Tung", phone: "0353879313", email: "huynhthanhtunga1@gmail.com"}],
            form: {name: '' ,phone: '',email: ''},
            isValid: false
        };
    }

    handleChange = (e) => {
        this.setState((state) => {
            const form = state.form
            form[e.target.name] = e.target.value
            return {form}
        }, () => this.checkInvalidForm()
        )
    }

    checkInvalidForm = () => {
        const {name, phone, email} = this.state.form
        const value = name && phone && email
        this.setState(
            {
                isValid: value
            }
        )
    }

    handleSubmit = () => {
        if(this.state.isValid){
            const newList = this.state.studentList
            newList.push(this.state.form)
            this.setState({studentList: newList})
            this.setState({form: {name: '' ,phone: '',email: ''}})
        }
    }


    render(){
        return(
            <div>
                <h1>Student List</h1>
                    <label>Name: <input name = "name" value = {this.state.form.name} type="text" onChange={this.handleChange}/></label>
                    <label>Phone: <input name = "phone" value = {this.state.form.phone} type="text" onChange={this.handleChange}/></label>
                    <label>Email: <input name ="email" value = {this.state.form.email} type="text" onChange={this.handleChange}/></label>
                    <button onClick={this.handleSubmit}>Submit</button>
                
                
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone</th>
                            <th>Email</th>
                        </tr>
                    </thead>
                    <tbody>
                    {this.state.studentList.map(student => (
                        <tr key={student.name}>
                            <td>{student.name}</td>
                            <td>{student.phone}</td>
                            <td>{student.email}</td>
                        </tr>
                    ))}
                    </tbody>  
                </table>
            </div>
        );
    }
}
export default StudentManagement;