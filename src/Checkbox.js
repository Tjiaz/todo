import React from "react";
import { FaSquare, FaCheckSquare } from "react-icons/fa";

const Checkbox = ({ checked = false, onClick }) => {
  return (
    <div onClick={onClick}>
      {checked && (
        <div className="checkbox checked">
          <FaCheckSquare />
        </div>
      )}

      {!checked && (
        <div className="checkbox unchecked">
          <FaSquare />
        </div>
      )}
    </div>
  );
};

export default Checkbox;
