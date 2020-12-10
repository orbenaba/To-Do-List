import React, { Component } from 'react'
import {Consumer} from '../context';
import axios from 'axios';

export default class Todo extends Component {
    style = ()=>{
        const {published} = this.props.todo;
        return {textDecoration: published? "line-through": "none"}
    }

    //used for the check-box
    toggle = async(id, published, title,dispatch)=>{
        const res = await axios.put(`http://localhost:8080/api/tutorials/${id}`,{title:title,published:!this.props.todo.published})
        console.log("result from server to put request is: ",res.data);
        dispatch({type:"TOGGLE", payload: id})
        console.log("id=",id,"\npublished=",published,"\ntitle=",title,"\n");
    }

    //for the delete button of the Todo component
    remove = async(id, dispatch)=>{//add here try catch
        await axios.delete(`http://localhost:8080/api/tutorials/${id}`);
        dispatch({type: "REMOVE", payload: id})
    }



    render() {
        const {title, _id, published} = this.props.todo;
        return (
            <Consumer>{value=>{
                const {dispatch} = value;
                return <h3 className="text-dark text-center p-1 bg-light border-bottom" style={this.style()}>
                            <i className="far fa-times-circle fa-sm float-left m-1 text-danger" onClick={this.remove.bind(this,_id,dispatch)}></i>
                            <i style={{fontFamily:'cursive'}}>{title}</i>
                            <input type="checkbox" checked={published} className="m-2 float-right" onChange={this.toggle.bind(this, _id,published,title, dispatch)}></input>
                       </h3>
            }}
            </Consumer>
        )
    } 
}

