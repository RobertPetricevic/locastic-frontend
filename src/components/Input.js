import React from "react";

const Input = (props) => {
  return (
    <div className={`inputContainer ${props.extraContainerClass}`}>
      <label htmlFor={props.id} className="inputLabel">
        {props.label}
      </label>
      {!(
        props.type === "date" ||
        props.type === "checkbox" ||
        props.select
      ) && <p className="errorText">Field is emptyyyyyyyyyyyyyyyyy</p>}
      {!props.select ? (
        <input
          id={props.id}
          type={props.type}
          placeholder={props.placeholder}
          className="inputField"
        />
      ) : (
        <select name="gender" id="gender">
          <option value="Female">Male</option>
          <option value="Female">Female</option>
        </select>
      )}
    </div>
  );
};

export default Input;
