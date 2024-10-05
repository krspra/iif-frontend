import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import LandingPage from "./LandingPage/LandingPage.jsx";
import Event from "./Event/Event.jsx";
import { MenuContextProvider } from "./Context.jsx";
import Signup from "./Signup/Signup.jsx";
import Login from "./Login/Login.jsx";



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <LandingPage />,
      },
      {
        path: "event",
        element: <Event /> 
      },

      {
        path: "Signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <MenuContextProvider>
    <RouterProvider router={router}></RouterProvider>
  </MenuContextProvider>
);
