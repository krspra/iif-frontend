import {Outlet} from "react-router-dom"
// import { useState,useEffect } from "react";
// import { Navigate } from "react-router-dom";
// import axios from "axios";
// import { USER_API_END_POINT } from "./constants/constant";

export default function App() {

  // const [isAuthenticated, setIsAuthenticated] = useState(null);

  // useEffect(() => {
  //   const checkAuth = async () => {
  //     try {
  //       const res = await axios.get(`${USER_API_END_POINT}/checkauth`, {
  //         withCredentials: true,
  //       });
  //       setIsAuthenticated(res.data.success);
  //     } catch (error) {
  //       setIsAuthenticated(false); // or handle accordingly
  //     }
  //   };
  
  //   checkAuth();
  // }, []);

  return (
      <Outlet/>
  );
}
