import { useContext, useState } from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const [formFields, setFormFields] = useState({ username: "", password: "" });
  const [error, setError] = useState(false);
  const { login } = useContext(AuthContext);
  const handleSubmit = (event) => {
    event.preventDefault();
    if (isFormValid()) {
      login();
      navigate("/");
      return;
    }
    setError(true);
  };

  const isFormValid = () => {
    if (
      formFields.username.trim() === "test" &&
      formFields.password.trim() === "test"
    ) {
      return true;
    }
    return false;
  };

  const handleChange = (event) => {
    setFormFields((form) => {
      return {
        ...form,
        [event.target.name]: event.target.value,
      };
    });
  };

  return (
    <section className="login-container">
      <form className="sign-in-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <input
          id="username"
          type="text"
          placeholder="Email or Phone number"
          name="username"
          onChange={handleChange}
        />
        <input
          id="password"
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        {error && <p>Please check username or password</p>}
        <button type="submit">Sign In</button>
        <a className="forget-password" href="#">
          Forgotten password?
        </a>
        <p className="signup">
          New to Debug Media?
          <strong>
            <a className="signup-link" href="#">
              {" "}
              Sign up now.
            </a>
          </strong>
        </p>
      </form>
    </section>
  );
};

export default Login;
