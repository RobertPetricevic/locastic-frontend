import React from "react";

import { ReactComponent as Logo } from "../assets/tinel-logo.svg";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <Logo className="logo" width={50} height={40} />

      <div className="headerCartContainer">
        <div className="headerIconContainer">
          <ion-icon name={`cart${1 === 1 ? "-outline" : null}`}></ion-icon>
        </div>
        <p className="headerCartText">Cart is Empty</p>
      </div>
    </div>
  );
};

export default Header;
