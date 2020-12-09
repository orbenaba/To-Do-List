import React, { Component } from 'react'
import Todo from './Todo';
import {Consumer} from '../context';

export default class Todos extends Component {

    render() {
        return (
            <Consumer>
                {value =>{
                    const {todos} = value
                    if(todos.length !== 0){
                        return todos && Array.isArray(todos) && todos.map(t => <Todo todo={t} key={t.id}></Todo>)                        
                    }
                    else{
                        //The list is empty
                        return <div className="empty-list">Your list is empty</div>
                    }
                }}
            </Consumer>
        )
    }
}