import './App.css';
import Header from './Components/Header';
import Addtodo from './Components/Addtodo';
import Todos from './Components/Todos';
import {Provider} from './context'; 
import { useGet } from "restful-react";

function App() {

  const { data: randomDogImage,loading } = useGet({
    path: '/api/tutorials/',
  });

  //addTodo is the child of provider, and setState is passed to the child so he can update the father
  return (
    loading ? <div>Loading...</div> :
    <Provider>
      <div className="app-container">
        <Header></Header>
        <Addtodo value={{setState: p=>{this.setState(p)}}}></Addtodo>
        <Todos></Todos>
      </div>  
    </Provider>
  );
}

export default App;
