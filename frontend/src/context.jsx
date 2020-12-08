import React, { Component } from 'react'
import axios from 'axios';


const Context = React.createContext();


const reducer = (prevState, action) => {
    switch (action.type) {
        case "TOGGLE":{
            return {
                todos: prevState.todos.map(
                    t => {
                        console.log("t._id = ",t._id);
                        if (t._id === action.payload) {
                            t.complete = !t.complete
                        }
                        axios.put('http://localhost/api/tutorials',t);
                        return t
                    })
            }
        }
        default:
            return prevState;
    }
}


export class Provider extends Component {
    constructor(props){
        super(props);
        this.state={
            dispatch: (action) => this.setState(prevState => reducer(prevState, action)),
            todos:[]
        }
    }
    
    async componentDidMount(){
        //Initializing the state of the provider to all the list od ToDos
        const res = await axios.get('http://localhost:8080/api/tutorials');
        this.setState({todos:res.data})
    }

    render() {
        console.log("")
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        )
    }
}


export const Consumer = Context.Consumer