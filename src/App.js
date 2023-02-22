import React, { useState, useEffect } from "react";
import './App.css';
import { v4 as uuid } from "uuid";
import "./App.css";
// import Routing from './Components/Routing';
// import { BrowserRouter } from "react-router-dom";
import ToDoList from "./Components/ToDoList";
import AddList from "./Components/AddList";
import Landing from "./Components/Landing"
// import Modal from "@mui/material/Modal/Modal";

function App() {

  const LOCAL_STORAGE_KEY = "todolists";
  const [todolists, setTodolists] = useState(
    JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) ? JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) : []
  );


  const addListHandler = (todolist) => {
    // console.log(todolist);
    setTodolists([...todolists, { id: uuid(), ...todolist }]);
  };

  const editList = (newList) => {

    let list = JSON.parse(localStorage.getItem('todolists'));

    list = list.map((value) => {
      if (value.id === newList.id) {
        return {
          ...value,
          title: newList.title,
          content: newList.content
        }
      }
      return value;
    })

    // console.log(list)

    localStorage.setItem('todolists', JSON.stringify(list));
  };

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todolists));
    console.log(todolists)
  });

  const removeListHandler = (id) => {
    const newTodoList = todolists.filter((todolist) => {
      return todolist.id !== id;
    });

    setTodolists(newTodoList);
  };
console.log()
  return (
    <div>
      {todolists.length > 0 ?
        <div>
          <Landing />
          <AddList addListHandler={addListHandler} />
          <ToDoList todolists={todolists} getListId={removeListHandler} editList={editList}/>
        </div> :
        <div>
          <Landing />
          <AddList addListHandler={addListHandler} />
        </div>
      }
    </div>
  );
}

export default App;
