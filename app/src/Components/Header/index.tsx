"use client";
import React from "react";
import Link from "next/link";
import {
  faAdjust,
  faBars,
  faMoon,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "@/public/static/images/Logo";
import "../../../../public/static/css/main.scss";
const Header = () => {
  const toggleTheme = () => {
    const dayNight = document.querySelector(".dayNight");
    const body = document.querySelector("body");
    body?.classList.toggle("dark");
    dayNight?.classList.toggle("active");
  };

  const toggleSidebar = () => {
    const menuToggle = document.querySelector(".menuToggle");
    const navigation = document.querySelector(".navigation");
    navigation?.classList.toggle("active");
    menuToggle?.classList.toggle("active");
  };

  return (
    <header>
      <div className="app-header">
        <div className="back-drop" />
        <Link className="logo" href="/">
          <Logo className="app-logo" /> San Raj
        </Link>
        <div className="rightSide">
          <div className="btns dayNight" onClick={toggleTheme}>
            <FontAwesomeIcon icon={faAdjust} />
            <FontAwesomeIcon icon={faMoon} />
          </div>
          <div className="btns menuToggle" onClick={toggleSidebar}>
            <FontAwesomeIcon icon={faBars} />
            <FontAwesomeIcon icon={faTimes} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
