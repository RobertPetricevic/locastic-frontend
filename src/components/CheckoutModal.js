import React from "react";

import Input from "./Input";

const CheckoutModal = (props) => {
  return (
    <div className="modalContainer">
      <div className="modalContent">
        <p className="modalTitle">Checkout</p>
        <p className="modalDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
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
        <p className="checkoutBTn">Checkout</p>
        <p className="exitBtn exitBtnFloat">+</p>
      </div>
    </div>
  );
};

export default CheckoutModal;
