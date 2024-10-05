import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { USER_API_END_POINT } from "../constants/constant";

function LogoutButton() {
    const navigate=useNavigate()
  const handleLogout = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`,{
        withCredentials:true,
      });
      navigate('/')
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Link
      onClick={() => {
        localStorage.removeItem("name")
        handleLogout();
      }}
      className="h-10 flex justify-center items-center w-20 text-lg rounded-md bg-blue-1 text-white font-bold"
    >
      Logout
    </Link>
  );
}

export default LogoutButton;
