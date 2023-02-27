import React, { useState } from 'react';
// import AddList from './AddList';

const Landing = (props) => {

    const [counter, setCounter] = useState(0);

    const container = {
        margin: '0',
        padding: '0',
        width: '100%',
        height: '200px',
        position: 'relative'
    }

    const subContainer = {
        margin: '0',
        padding: '0',
        width: '100%',
        height: '90%',
        position: 'absolute',
    }

    const count = () => {
        setCounter(1);
    }
    return (

        <div className="container" style={container}>
            <div >
                <img src={require('../images/ToDoList.jpg')} style={subContainer} />
                <button data-testid="count" onClick={count} style={{ position: 'absolute', top: '90%', left: '50%' }}>{counter}</button>
            </div>
            {/* <button className="buttonRed" style={button} onClick={() => props.navigate('/addlist')}>
                Create a new Todo List
            </button> */}
            {/* <button className="buttonRed" style={button1} onClick={() => props.navigate('/todolist')}>
                View My Todo-Lists
            </button> */}

        </div>
    );
};
export default Landing;