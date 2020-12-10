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
                        return todos && Array.isArray(todos) && todos.map(t => <Todo todo={t} key={t._id}></Todo>)                        
                    }
                    else{
                        //The list is empty
                        return <div>
                                <i className="fas fa-list fa-10x empty-list "></i>
                                <h3 className="noTodos">You have no Todos</h3>                
                        </div>

                    }
                }}
            </Consumer>
        )
    }
}