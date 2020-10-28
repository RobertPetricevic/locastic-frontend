import React from "react";

import { ReactComponent as Logo } from "../assets/tinel-logo.svg";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <Logo width={50} height={40} />
      <div className="headerCartContainer">
        <i class="fas fa-shopping-cart"></i>
        <p className="headerCartText">Cart is Empty</p>
      </div>
    </div>
  );
};

export default Header;
