import App from "../../../App";
import Login from "../Login/Login";
import ProtectedRouteHome from "../ProtectedRoute/ProtectedRouteHome";
import MovieSearch from "../MovieSearch/MovieSearch";
import { createBrowserRouter } from "react-router-dom";
import ProtectedRouteLogin from "../ProtectedRoute/ProtectedRouteLogin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/login",
        element: (
          <ProtectedRouteLogin>
            <Login />
          </ProtectedRouteLogin>
        ),
      },
      {
        path: "/",
        element: (
          <ProtectedRouteHome>
            <MovieSearch />
          </ProtectedRouteHome>
        ),
      },
    ],
  },
]);
