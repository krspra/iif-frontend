import React from "react";
import { Link } from "react-router-dom";

function SignupButton() {
  return (
    <Link
      to="/signup"
      className="h-10 flex justify-center items-center w-20 text-lg rounded-md bg-blue-1 text-white font-bold"
    >
      Signup
    </Link>
  );
}

export default SignupButton;
