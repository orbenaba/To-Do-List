import React, { Component } from 'react'
import axios from 'axios';


const Context = React.createContext();


const reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE":{
            return {
                todos: prevState.todos.map(
                    t => {
                        console.log("t._id = ",t._id,"\naction.payload = ",action.payload);
                        if (t._id === action.payload) {
                            t.complete = !t.complete
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
        default:
            return prevState;
    }
}


export class Provider extends Component {
    state ={
        todos:[]//_id, title, published
        ,
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