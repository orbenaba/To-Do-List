import React, { Component } from 'react'
import axios from 'axios';


const Context = React.createContext();


const reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE":{
            return {
                todos: prevState.todos.map(
                    t => {
                        if (t._id === action.payload) {
                            t.published = !t.published
                        }
                        return t
                    })
            }
        }
        case "REMOVE":{
            return {
                 todos: prevState.todos.filter(todo => todo._id !== action.payload)
            }
        }
        case "ADD":{
            return {
                todos: [...prevState.todos, action.payload]
            }
        }
        case "DELETE_ALL":{
            return {
                todos: []
            }
        }
        default:
            return prevState;
    }
}


export class Provider extends Component {
    state ={
        //_id, title, published
        todos:[],
        dispatch:(action)=>this.setState(prevState => reducer(prevState, action))
    }

    async componentDidMount(){
        const res = await axios.get('http://localhost:8080/api/tutorials');
        this.setState({todos: res.data});
    }

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer    