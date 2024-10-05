import React from "react";
import { useRef } from "react";
import axios from "axios"; // Missing axios import
import { USER_API_END_POINT } from "../constants/constant";
import {Link} from "react-router-dom"
import { useNavigate } from "react-router-dom";
import login from "./signupBlue.svg"
import logo from "./iif-nsut-transparent.png"

function Login() {
  const navigate=useNavigate();

  const emailData = useRef("");
  const passwordData = useRef("");

  const handleLogin = async () => {
    const email = emailData.current.value;
    const password = passwordData.current.value;

    // Checking if any field is empty
    if (email === "" || password === "") {
      return alert("Please Enter Email & Password");
    }

    // Checking if entered email is valid or not
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isEmail = emailRegex.test(email);
    if (!isEmail) {
      return alert("Please Enter a Valid Email");
    }

    // Sending the data as JSON
    const loginData = {
      email,
      password,
    };


    try {
      const res = await axios.post(`${USER_API_END_POINT}/login`, loginData, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      if (res.data.success) {
        localStorage.setItem("name",res.data.user.name)
        navigate('/event')

      }
    } 
    catch (error) {
      alert(error.response.data.message)
       
    }
    
    emailData.current.value = "";
    passwordData.current.value = "";
  };

  return (
    <div className="flex justify-around items-center my-16">
      <div className="flex flex-col items-center gap-3">
        <img src={logo} className="h-24" alt="logo" />
        <form className="w-[400px] h-96 flex flex-col gap-1 justify-around items-center max-custom3:h-64 max-custom3:w-[300px]">

          {/* Email */}
          <div className="flex flex-col h-20 p-2 rounded-xl border w-full">
            <label htmlFor="Email">Email</label>
            <input
              ref={emailData}
              className="focus:outline-none"
              id="Email"
              type="email"
              placeholder="Enter your email..."
            />
          </div>
          {/* Password */}
          <div className="flex flex-col h-20 p-2 rounded-xl border w-full">
            <label htmlFor="Password">Password</label>
            <input
              ref={passwordData}
              className="focus:outline-none"
              id="Password"
              type="password"
              placeholder="Enter your Password"
            />
          </div>

          {/* Button */}
          <button
            onClick={handleLogin}
            type="button"
            className="bg-blue-1 h-14 text-xl w-[95%] rounded-lg text-white font-bold"
          >
            Login with Email
          </button>
          <span>Don't have an account? <Link className="text-blue-600" to='/signup'>Signup</Link></span>
        </form>
      </div>

      <img src={login} className="h-96 max-custom1:hidden" alt="signup illustration" />
    </div>
  );
}

export default Login;
