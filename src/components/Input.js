import React, { useReducer, useEffect } from "react";

const INPUT_CHANGE = "INPUT_CHANGE";
const INPUT_FOCUSED = "INPUT_FOCUSED";

const inputReducer = (state, action) => {
  switch (action.type) {
    case INPUT_CHANGE:
      return {
        ...state,
        value: action.value,
        isValid: action.isValid,
      };
    case INPUT_FOCUSED:
      return {
        ...state,
        focused: true,
      };
    default:
      return state;
  }
};

const Input = (props) => {
  const [inputState, dispatch] = useReducer(inputReducer, {
    value: "",
    isValid: false,
    focused: false,
  });

  const textChangeHandler = (e) => {
    if (e.target.attributes[1].nodeValue === "checkbox") {
      dispatch({
        type: INPUT_CHANGE,
        value: e.target.checked ? "true" : "false",
        isValid: e.target.checked,
      });
      return;
    }
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    let isValid = true;
    if (e.target.value.trim().length === 0) {
      isValid = false;
    }
    if (
      props.type === "email" &&
      !emailRegex.test(e.target.value.toLowerCase())
    ) {
      isValid = false;
    }
    if (props.type === "number" && parseInt(e.target.value) <= 0) {
      isValid = false;
    }
    dispatch({ type: INPUT_CHANGE, value: e.target.value, isValid: isValid });
  };

  const handleFocus = () => {
    dispatch({ type: INPUT_FOCUSED });
  };

  const { onInputChange, id } = props;

  useEffect(() => {
    onInputChange(id, inputState.value, inputState.isValid);
  }, [inputState, onInputChange, id]);

  return (
    <div className={`inputContainer ${props.extraContainerClass}`}>
      <label htmlFor={props.id} className="inputLabel">
        {props.label}
      </label>
      {props.type !== "date" &&
        props.type !== "checkbox" &&
        !inputState.isValid &&
        inputState.focused && <p className="errorText">{props.errorText}</p>}
      <input
        onFocus={handleFocus}
        id={props.id}
        type={props.type}
        placeholder={props.placeholder}
        className={`inputField ${
          inputState.focused || inputState.value !== ""
            ? inputState.isValid
              ? "inputFieldVaild"
              : "inputFieldInvaild"
            : ""
        }`}
        onChange={textChangeHandler}
        value={inputState.value}
      />
    </div>
  );
};

export default Input;
