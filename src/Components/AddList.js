import React, { Component } from 'react';
import "../Css/addlist.css";
// import ToDoList from './ToDoList';
// import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

// import Button from '@mui/material/Button';

class AddList extends Component {

    state = {
        title: "",
        content: "",
        color: "",
        open: false,
    };
    

    add = (e) => {
        e.preventDefault();
        if (this.state.title === "" || this.state.content === "" || this.state.color === "") {
            alert("ALl the fields are mandatory!");
            return;
        }
        this.props.addListHandler(this.state);
        this.setState({ title: "", content: "", color: "" });
    };

    handleClose = () => {
        this.setState({ open: false });
    }

    handleOpen = () => {
        // debugger

        this.setState({ open: true });
        console.log(this.state.open)
    }

    render() {
        const button = {
            top: '26%',
            left: '45%',
            position: 'absolute',
            padding: '10px',
            backgroundColor: 'rgb(139, 6, 32)',
            borderRadius: '5px',
            border: 'none',
            color: 'white',
            fontSize: '14px',
            marginTop: '10px',

        }

        const style = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'rgb(167, 199, 231)',
            boxShadow: 24,
            p: 4,
            padding: '10px'
        };

        return (
            <div>
                <button style={button} onClick={this.handleOpen}>
                    Create a new Todo List
                </button>
                {this.state.open &&
                    <Box sx={style}>
                        <div className="ui main">
                            {/* <h3 style={{ marginTop: '24px', marginLeft: '10px', color: 'rgb(139, 6, 32)' }}>Add your to-do list</h3> */}
                            <form className="uIform" onSubmit={this.add} style={{ marginTop: '30px' }}>
                                <div className="field">
                                    <label>Date</label>
                                    <input
                                        type="date"
                                        name="title"
                                        placeholder="Title"
                                        value={this.state.title}
                                        onChange={(e) => this.setState({ title: e.target.value })}
                                    />
                                </div>
                                <div className="field">
                                    <label>Color</label>
                                    <input type="text" name="color"
                                        placeholder="Color"
                                        value={this.state.color}
                                        onChange={(e) => this.setState({ color: e.target.value })} />
                                </div>
                                <div className="field">
                                    <label>Content</label>
                                    <textarea
                                        type="textarea"
                                        name="content"
                                        placeholder="Content"
                                        value={this.state.content}
                                        onChange={(e) => this.setState({ content: e.target.value })}
                                    />
                                </div>

                                <button className="uIbutton">ADD</button>
                            </form>
                        </div>
                        <button className="buttonRed" onClick={() => this.handleClose()}>
                            Cancel
                        </button>
                    </Box>
                }
            </div>
        );
    }
}

export default AddList;