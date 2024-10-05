import React from "react";
import { useContext } from "react";
import { MenuContext } from "../Context";
import { Link } from "react-router-dom";
import logo from "./images/iif-nsut-transparent.png"

function Menu({ scrollToAbout, scrollToHome, scrollToEvent, scrollToContact }) {
  const { isMenuActive, updateMenuStatus } = useContext(MenuContext);
  return (
    <aside
      onClick={() => {
        updateMenuStatus(!isMenuActive);
      }}

      className={`z-50 fixed flex flex-col gap-10 items-center top-0 h-screen bg-custom-gradient w-96 max-custom3:w-72 ${
        isMenuActive ? "" : "hidden"
      }`}
    >
      {/* LOGO */}
      <Link
        className="pt-8"
        onClick={(e) => {
          e.preventDefault();
          scrollToHome();
        }}
      >
        <img
          src={logo}
          alt="Logo"
          className="w-20 h-20 rounded-full"
        />
      </Link>

      {/* navigations */}

      <nav className="h-14 gap-10 flex flex-col items-center">
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToHome();
          }}
          className="text-3xl text-black-1"
        >
          Home
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToEvent();
          }}
          className="text-3xl text-black-1"
        >
          Event Gallery
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToAbout();
          }}
          className="text-3xl text-black-1"
        >
          About Us
        </Link>
        <Link
          onClick={(e) => {
            e.preventDefault();
            scrollToContact();
          }}
          className="text-3xl text-black-1"
        >
          Contact us
        </Link>
      </nav>
    </aside>
  );
}

export default Menu;
