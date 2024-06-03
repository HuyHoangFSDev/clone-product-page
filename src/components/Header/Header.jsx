import React from "react";
import HeaderBoxInfo from "./HeaderBoxInfo";
import HeaderBar from "./HeaderBar";
import ScrollTriggerHeader from "./ScrollTriggerHeader";

function Header() {
  return (
    <header className= "Header">
      <HeaderBoxInfo />
      <HeaderBar /> 
      <ScrollTriggerHeader/>
      <hr className="h-2   px-4 w-11/12 mx-auto" />
    </header>
  );
}

export default Header;
