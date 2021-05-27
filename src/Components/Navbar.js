import React from "react";
import "../styles/navbar.css";
import MenuIcon from "@material-ui/icons/Menu";
export default function NavBar() {
  return (
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">LOGO</div>
      </div>

      <MenuIcon
        style={{ marginLeft: "175px", marginTop: "13px" }}
        color="black"
      />
    </div>
  );
}
