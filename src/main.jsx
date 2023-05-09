import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./components/MovieApp/Context/AuthContext";
import { router } from "./components/MovieApp/routes/routeConfig";
import "./styles/global.css";
import { MovieProvider } from "./components/MovieApp/context/MovieContext";
import { ThemeProvider } from "./components/MovieApp/context/ThemeContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ThemeProvider>
    <AuthProvider>
      <MovieProvider>
        <RouterProvider router={router} />
      </MovieProvider>
    </AuthProvider>
  </ThemeProvider>
);
