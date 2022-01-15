import React from "react";
import { ReactComponent as Logo } from "./logo.svg";
import Button from "../../components/Button";
import "./style.css";

export default function Navbar() {
  return (
    <nav>
      <Logo id="logo" />
      <div>
        <h3 style={{ color: "#202336" }}>Home</h3>
        <h3>Destinations</h3>
        <h3>About</h3>
        <h3>Partner</h3>
        <div id="login">
          <Button outlined={true} width="132px" text="Login" />
        </div>
        <Button outlined={false} width="132px" text="Register" />
      </div>
    </nav>
  );
}
