import React, { useState } from "react";
import Checkbox from "./Checkbox";
import { FaTrash } from "react-icons/fa";

const Task = ({ name, done, onToggle, onTrash, onRename }) => {
  const [editMode, setEditMode] = useState(false);
  return (
    <div className={"task" + (done ? "done" : "")}>
      {!editMode && (
        <>
          <Checkbox  defaultChecked={done} onClick={() => onToggle(!done)} />
          <div
            className="taskname"
            onClick={() => setEditMode((prev) => !prev)}
          >
            <span>{name}</span>
          </div>
        </>
      )}
      {editMode && (
        <form
          onSubmit={(e) => {
            e.preventDefault().setEditMode(false);
          }}
        >
          <input
            type="text"
            value={name}
            onChange={(e) => onRename(e.target.value)}
          />
        </form>
      )}

      <button className="trash" onClick={onTrash}>
        <FaTrash />
      </button>
    </div>
  );
};

export default Task;
