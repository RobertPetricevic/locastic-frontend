import React, { useReducer, useCallback, useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Input from "./Input";
import {
  toggleCheckout,
  closeModal,
  closeCart,
  emptyCart,
  storeOrders,
} from "../store/actions";

import { ClipLoader } from "react-spinners";

const FORM_INPUT_UPDATE = "FORM_INPUT_UPDATE";

const formReducer = (state, action) => {
  if (action.type === FORM_INPUT_UPDATE) {
    const updatedValues = {
      ...state.inputValues,
      [action.input]: action.value,
    };
    const updatedValidities = {
      ...state.inputValidities,
      [action.input]: action.isValid,
    };
    let updatedFormIsValid = true;
    for (const key in updatedValidities) {
      updatedFormIsValid = updatedFormIsValid && updatedValidities[key];
    }
    return {
      formIsValid: updatedFormIsValid,
      inputValidities: updatedValidities,
      inputValues: updatedValues,
    };
  }
  return state;
};

const CheckoutModal = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();
  const history = useHistory();
  const dispatch = useDispatch();

  const [formState, dispatchFormState] = useReducer(formReducer, {
    inputValues: {
      firstName: "",
      lastName: "",
      email: "",
      date: "",
      address: "",
      code: "",
      check: "",
    },
    inputValidities: {
      firstName: false,
      lastName: false,
      email: false,
      date: false,
      address: false,
      code: false,
      check: false,
    },
    formIsValid: false,
  });

  // console.log(formState);

  const inputChangeHandler = useCallback(
    (inputIdentifier, inputValue, inputValidity) => {
      dispatchFormState({
        type: FORM_INPUT_UPDATE,
        value: inputValue,
        isValid: inputValidity,
        input: inputIdentifier,
      });
    },
    [dispatchFormState]
  );

  const handleBtnClick = async () => {
    if (!props.checkout) {
      history.replace("/");
      dispatch(toggleCheckout());
      dispatch(closeModal());
    } else {
      if (!formState.formIsValid) {
        alert("Wrong input! Please check the errors in the form.", [
          { text: "Okay" },
        ]);
        return;
      }
      setError(null);
      setIsLoading(true);
      try {
        await dispatch(storeOrders());
        dispatch(toggleCheckout());
        dispatch(closeCart());
        dispatch(emptyCart());
      } catch (err) {
        setError(err.message);
      }
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (error) {
      alert(`${error}  Please try again`, error, [{ text: "Okay" }]);
    }
  }, [error]);

  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div className="modalHeader">
          {props.checkout && (
            <p
              className="exitBtn exitBtnFloat"
              onClick={() => {
                dispatch(closeModal());
              }}
            >
              +
            </p>
          )}
          <p className="modalTitle">
            {props.checkout ? "Checkout" : "Thank you!"}
          </p>
          <p className="modalDescription">
            {props.checkout
              ? "CHECKOUT ipsum dolor sit amet consectetur adipisicing CHECKOUT."
              : "THANKYOU ipsum dolor sit amet consectetur adipisicing THANKYOU."}
          </p>
        </div>
        {props.checkout && (
          <>
            <Input
              errorText="Please enter a valid first name!"
              label="First Name"
              id="firstName"
              type="text"
              placeholder="Type your first name here"
              onInputChange={inputChangeHandler}
            />
            <Input
              errorText="Please enter a valid last name!"
              label="Last Name"
              id="lastName"
              type="text"
              placeholder="Type your last name here"
              onInputChange={inputChangeHandler}
            />
            <Input
              errorText="Please enter a valid email address!"
              label="Email Address"
              id="email"
              type="email"
              placeholder="Type your email address here"
              onInputChange={inputChangeHandler}
            />
            <div className="dateGenderInputs">
              <Input
                label="Date of Birth"
                id="date"
                type="date"
                extraContainerClass="shortInput"
                onInputChange={inputChangeHandler}
              />
              <div className="inputContainer shortInput">
                <label htmlFor="gender" className="inputLabel">
                  Gender
                </label>
                <select name="gender" id="gender">
                  <option value="Female">Male</option>
                  <option value="Female">Female</option>
                </select>
              </div>
            </div>
            <Input
              errorText="Please enter a valid address!"
              label="Address"
              id="address"
              type="text"
              placeholder="Type your address here"
              onInputChange={inputChangeHandler}
            />
            <Input
              errorText="Please enter a valid code!"
              label="Zip Code"
              id="code"
              type="number"
              placeholder="e.g. 21000"
              onInputChange={inputChangeHandler}
            />
            <Input
              label="I agree"
              id="check"
              type="checkbox"
              extraContainerClass="checkbox"
              onInputChange={inputChangeHandler}
            />
          </>
        )}
        <div
          onClick={() => {
            handleBtnClick();
          }}
          className="checkoutBtn"
        >
          {isLoading ? (
            <ClipLoader size={10} />
          ) : props.checkout ? (
            "Checkout"
          ) : (
            "Back to Shop"
          )}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
