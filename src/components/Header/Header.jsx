import React from "react";
import HeaderBoxInfo from "./HeaderBoxInfo";
import HeaderBar from "./HeaderBar";

function Header() {
  return (
    <header className= "Header">
      <HeaderBoxInfo />
      <HeaderBar /> 
      <hr className="h-2   px-4 w-11/12 mx-auto" />
    </header>
  );
}

export default Header;
