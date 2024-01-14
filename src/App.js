import logo from './logo.svg';
import './App.css';
import ContainerTodo from "./component/ContainerTod";
import { TodoContext } from './context/TodoContext';
import { v4 as uuidv4 } from 'uuid';
import { useState } from "react";

const tasks =
  [
    {
      id: uuidv4(),
      title: "erse",
      descrption: "todo",
      iscompleted: false
    },
    {
      id: uuidv4(),
      title: "erse",
      descrption: "todo",
      iscompleted: false
    },
    {
      id: uuidv4(),
      title: "erse",
      descrption: "todo",
      iscompleted: false
    },
    {
      id: uuidv4(),
      title: "erse",
      descrption: "todo",
      iscompleted: false
    }
  ]
function App() {
  const [todos, addTodo] = useState(tasks);
  return (
    <div className="App" style={{
      display: "flex",
      height: "100vh",
      justifyContent: "center",
      alignItems: "center",


    }}>
      <TodoContext.Provider value={{ todos, addTodo }}>
        <ContainerTodo />
      </TodoContext.Provider>
    </div>
  );
}

export default App;
