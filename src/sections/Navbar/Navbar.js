import React, { useState } from "react";
import { ReactComponent as Logo } from "./logo.svg";
import Button from "../../components/Button";
import { GiHamburgerMenu } from "react-icons/gi";

import "./style.css";
import { motion } from "framer-motion";

export default function Navbar() {
  const [opened, setOpened] = useState(false);
  return (
    <nav>
      <div>
        <Logo id="logo" />
        <GiHamburgerMenu
          className="hamburger"
          onClick={() => {
            setOpened((prev) => !prev);
          }}
        />
        <div className="menu1">
          <h3 style={{ color: "var(--primary-text)" }}>Home</h3>
          <h3>Destinations</h3>
          <h3>About</h3>
          <h3>Partner</h3>
          <div id="login">
            <Button outlined={true} width="132px" text="Login" />
          </div>
          <Button outlined={false} width="132px" text="Register" />
        </div>
      </div>
      <div>
        {opened && (
          <motion.div className="menu" transition={{duration: 0.2}} animate={{ y: [-100, 0] }}>
            <h3 style={{ color: "var(--primary-text)" }}>Home</h3>
            <h3>Destinations</h3>
            <h3>About</h3>
            <h3>Partner</h3>{" "}
            <div id="login">
              <Button outlined={true} width="132px" text="Login" />
            </div>
            <Button outlined={false} width="132px" text="Register" />
          </motion.div>
        )}
      </div>
    </nav>
  );
}
