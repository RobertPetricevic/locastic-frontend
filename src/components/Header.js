import React from "react";

import { ReactComponent as Logo } from "../assets/tinel-logo.svg";

import CartPopupBox from "./CartPopupBox";
import CartIconContainer from "./CartIconContainer";

const Header = (props) => {
  return (
    <div className="headerContainer">
      <Logo className="logo" width={50} height={40} />
      <CartPopupBox />
      <CartIconContainer header />
    </div>
  );
};

export default Header;
