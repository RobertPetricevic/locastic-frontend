import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import Input from "./Input";
import { toggleCheckout, toggleModal } from "../store/actions";

const CheckoutModal = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();

  const num = 0;
  // const num = 1;

  const handleBtnClick = (num) => {
    if (props.checkout) {
      history.replace("/");
      dispatch(toggleCheckout());
    } else {
      dispatch(toggleModal());
      dispatch(toggleCheckout());
    }
  };

  return (
    <div className="modalContainer">
      <div className="modalContent">
        <div
          className={
            num === 1 ? "modalHeader" : "modalHeader modalMobileHeader"
          }
        >
          {props.checkout && <p className="exitBtn exitBtnFloat">+</p>}
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
              label="First Name"
              id="fName"
              type="text"
              placeholder="Type your first name here"
            />
            <Input
              label="Last Name"
              id="lName"
              type="text"
              placeholder="Type your last name here"
            />
            <Input
              label="Email Address"
              id="email"
              type="email"
              placeholder="Type your email address here"
            />
            <div className="dateGenderInputs">
              <Input
                label="Date of Birth"
                id="date"
                type="date"
                extraContainerClass="shortInput"
              />
              <Input
                label="Gender"
                id="gender"
                type="text"
                extraContainerClass="shortInput"
                select
              />
            </div>
            <Input
              label="Address"
              id="address"
              type="text"
              placeholder="Type your address here"
            />
            <Input
              label="Zip Code"
              id="zip"
              type="number"
              placeholder="e.g. 21000"
            />
            <Input
              label="I agree"
              id="check"
              type="checkbox"
              extraContainerClass="checkbox"
            />
          </>
        )}
        <div
          onClick={() => {
            handleBtnClick(num);
          }}
          className={
            num === 1 ? "checkoutBtn" : "checkoutBtn checkoutMobileBtn"
          }
        >
          {props.checkout ? "Checkout" : "Back to Shop"}
        </div>
      </div>
    </div>
  );
};

export default CheckoutModal;
