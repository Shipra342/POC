import React from "react";
import Todocard from './Todocard';

const ToDoList = (props) => {


    const main ={
        width: '99%',
        margin: '5px',
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: '100px'
    }

    const deleteListHandler = (id) => {
        props.getListId(id);
    };

    const updateList = (newList) => {

        props.editList(newList);
    };

    const renderToDoList = props.todolists && props.todolists.map((todolist) => {
        return (
            <Todocard
                todolist={todolist}
                clickHandler={deleteListHandler}
                key={todolist.id}
                updateList={updateList}
            />
        );
    });
    return (
        <div style={main}>{renderToDoList}</div>
    );
};

export default ToDoList;
