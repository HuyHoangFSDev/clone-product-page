import React from "react";
import HeaderBoxInfo from "./HeaderBoxInfo";
import HeaderBar from "./HeaderBar";
import ScrollTriggerHeader from "./ScrollTriggerHeader";
import '../../assets/style/style.scss'

function Header() {
  return (
    <header className= "header">
      <HeaderBoxInfo />
      <HeaderBar /> 
      <ScrollTriggerHeader/>
      <hr className="h-2   px-4 w-11/12 mx-auto" />
    </header>
  );
}

export default Header;
