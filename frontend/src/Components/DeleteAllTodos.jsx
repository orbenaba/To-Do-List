import React, { Component } from 'react'
import {Consumer} from '../context';
import axios from 'axios';




export default class DeleteAllTodos extends Component {
    removeAll = async(dispatch)=>{
        console.log("In delete all".repeat(100));
        await axios.delete('http://localhost:8080/api/tutorials');
        dispatch({type:'DELETE_ALL'})
    }


    render() {
        //no need of consumer
        return (
            <Consumer>{value=>{
                const {dispatch} = value;
                 return <button className="delete-all" onClick={() => {if (window.confirm('Are you sure you wish to delete all the list?')) this.removeAll(dispatch) } }>Delete all</button>    
            }}
            </Consumer>
        )
    }
}
