import React from "react";
import HarmburgerIcon from "./HamburgerIcon";
import "./styles.css";

function NavInshort({ setCategory }) {
  const logo = { image: "./logo_inshorts.png" };
  return (
    <div className="nav">
      <div className="icon">
        <HarmburgerIcon setCategory={setCategory} />
      </div>
      <img src={logo.image} alt="nav logo" style={{ height: "80%" }} />
    </div>
  );
}

export default NavInshort;
