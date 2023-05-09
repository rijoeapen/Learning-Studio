import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import "./Header.css";
import { useNavigate } from "react-router-dom";
import { themes } from "../constants";
import { ThemeContext } from "../context/ThemeContext";

const Header = () => {
  const navigate = useNavigate();
  const { logout, auth } = useContext(AuthContext);
  const { theme, setTheme } = useContext(ThemeContext);

  const logoutUser = () => {
    logout();
    navigate("login");
  };

  const changeTheme = () => {
    if (theme === themes.dark) {
      setTheme(themes.light);
    } else {
      setTheme(themes.dark);
    }
  };

  return (
    <header>
      <div className="app-name">
        <img
          src="src/assets/images/film.png"
          alt="App Icon"
          width={48}
          height={48}
        />
        <h1>Debug Media</h1>
      </div>
      <div className="app-profile">
        <button
          className="btn-light"
          onClick={changeTheme}
          style={{
            backgroundColor:
              theme === themes.light
                ? "var(--bg-light-primary)"
                : "var(--bg-dark-primary)",
            color:
              theme === themes.light
                ? "var(--text-dark-primary-color)"
                : "var(--text-light-primary-color)",
          }}
        >
          {theme === themes.dark && <ion-icon name="sunny-outline"></ion-icon>}
          {theme === themes.light && <ion-icon name="moon-outline"></ion-icon>}
        </button>
        {(auth || localStorage.getItem("auth_token")) && (
          <button
            className="btn-logout"
            onClick={logoutUser}
            style={{
              backgroundColor:
                theme === themes.light
                  ? "var(--bg-light-primary)"
                  : "var(--bg-dark-primary)",
              color:
                theme === themes.light
                  ? "var(--text-dark-primary-color)"
                  : "var(----text-light-primary-color)",
            }}
          >
            <span>Logout</span>
            <ion-icon name="person-circle-outline"></ion-icon>
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
