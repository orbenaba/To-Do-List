import './App.css';
import Header from './Components/Header';
import Addtodo from './Components/Addtodo';
import Todos from './Components/Todos';
import DeleteAllTodos from './Components/DeleteAllTodos'

import {Provider} from './context'; 

function App() {


  //addTodo is the child of provider, and setState is passed to the child so he can update the father
  return (
    <Provider>
            <DeleteAllTodos></DeleteAllTodos>
            <div className="app-container">
              <Header></Header>
              <Addtodo value={{setState: p=>{this.setState(p)}}}></Addtodo>
              <Todos></Todos>
            </div>
    </Provider>
  );
}

export default App;
