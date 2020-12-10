import React, { Component } from 'react'
import axios from 'axios';
import {Consumer} from '../context';

export default class Addtodo extends Component {
   state ={
        _id:-1,
        title:"",
        complete: false
    }

   update = (e)=>{
       this.setState({
           title: e.target.value
       })
   }

   add = async(dispatch, e)=>{
       e.preventDefault();
       //const newTodo = this.state;
       const res = await axios.post("http://localhost:8080/api/tutorials", {published:false, title:this.state.title});
       dispatch({type:"ADD", payload: res.data});
       //after adding the new item, we need to update the text-input
       this.setState({title: ""});
   }

    render() {
        return (
            <Consumer>{value=>{
                const {dispatch} = value;    
                return <form onSubmit = {this.add.bind(this,dispatch)}>
                    <input type="text" className="form-control rounded-0" style={{fontFamily:'cursive'}} placeholder="Write your to do here ..." required minLength="3" maxLength="30" onChange={this.update} value={this.state.title}></input>
                    <button className="form-control rounded-0 btn-secondary" style={{fontFamily:'cursive'}} type="submit">Add Todo</button>
                    </form>
            }}  
            </Consumer>
        )
    }
}
