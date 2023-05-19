import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { router } from "./components/MovieApp/routes/routeConfig";
import "./styles/global.css";
import { ThemeProvider } from "./components/MovieApp/context/ThemeContext";
import { AuthProvider } from "./components/MovieApp/context/AuthContext";
import { MovieProvider } from "./components/MovieApp/context/MovieContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <App />
  // <ThemeProvider>
  // <AuthProvider>
  //   <MovieProvider>
  //     <RouterProvider router={router} />
  //   </MovieProvider>
  // </AuthProvider>
  // </ThemeProvider>
);
