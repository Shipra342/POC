import React from 'react';
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Landing from "./Landing";
import AddList from "./AddList";
import ToDoList from "./ToDoList";

const Routing = (props) => {

    const navigate = useNavigate();

    return (
        <Routes>
            <Route exact path="/" element={<Landing navigate={navigate} />} />
            <Route exact path="/addlist" element={<AddList addListHandler={props.addListHandler} />} />  
            <Route exact path="/todolist" element={<ToDoList todolists={props.todolists} getListId={props.getListId} />} />
        </Routes>
    );
};
export default Routing;