import React, { useState, useRef } from "react";
import "../Css/todoCard.css";
import CreateIcon from "@mui/icons-material/Create";
import DeleteIcon from "@mui/icons-material/Delete";
import CheckIcon from "@mui/icons-material/Check";

const Todocard = (props) => {
  const { id, title, content, color } = props.todolist;

  const [isDisabled, setIsDisabled] = useState(false);

  const handleClick = () => {
    setIsDisabled(!isDisabled);
  };

  const updateList = () => {
    props.updateList(props.todolist);
    setIsDisabled(!isDisabled);
  };

  return (
    <div className="item" style={{ backgroundColor: color }}>
      <div className="content">
        <input
          type="date"
          defaultValue={title || ""}
          style={{
            border: "none",
            background: "transparent",
            width: "100%",
            backgroundColor: isDisabled ? "#F8F0E3" : color,
          }}
          onChange={(e) => (props.todolist.title = e.target.value)}
          disabled={!isDisabled}
        />
        <br />
        <textarea
          className="ellipsis"
          defaultValue={content || ""}
          style={{ backgroundColor: isDisabled ? "#F8F0E3" : color }}
          onChange={(e) => (props.todolist.content = e.target.value)}
          disabled={!isDisabled}
        />
        {isDisabled ? (
          <i style={{ color: "black" }} onClick={updateList}>
            <CheckIcon />
          </i>
        ) : null}
      </div>
      <div className="icons">
        <button
          onClick={handleClick}
          style={{ background: "transparent", border: "none" }}
        >
          <i>
            <CreateIcon />
          </i>
        </button>
        <button
          data-testid="delete"
          onClick={() => props.clickHandler(id)}
          style={{ background: "transparent", border: "none" }}
        >
          <i style={{ color: "red" }}>
            <DeleteIcon />
          </i>
        </button>
      </div>
    </div>
  );
};

export default Todocard;
