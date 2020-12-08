import React, { Component } from 'react'
import axios from 'axios';


export default class Addtodo extends Component {
    constructor(props){
        super(props);
        this.state={
            description:"",
            setState: props.value.setState
        };
    }
    //Note here: the description field in required and validated already ...
    onSubmit = async(e) =>{
        await e.preventDefault();
        try{
            const res = await axios.post("http://localhost:8080/api/tutorials",{title: this.state.description});
            //After adding the todo, we need to clean up the input line
            //Everything is cool
            this.state.setState({todos: res});
            this.setState({
                description:""
            });
        }catch(err){
            console.error(err);
        }
    }

    //listening for each ket-stroke of the user
    onDescriptionChange = (description)=>{
        this.setState({description});
    }

    render() {
        return (
            <form onSubmit = {this.onSubmit}>
                <input type="text" className="form-control rounded-0" placeholder="Write your to do here ..." required onChange={e => this.onDescriptionChange(e.target.value)}></input>
                <button className="form-control rounded-0 btn-secondary" type="submit">Add to-do</button>
            </form>
        )
    }
}
