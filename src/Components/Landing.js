import React from 'react';
// import AddList from './AddList';

const Landing = (props) => {

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
        height: '100%',
        position: 'absolute',
    }

    return (

        <div className="container" style={container}>
            <div >
                <img src={require('../images/ToDoList.jpg')} style={subContainer} />
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