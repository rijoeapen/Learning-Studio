import "./Button.css";
const Button = ({ text, flex, buttonHandle, style }) => {
  return (
    <button style={style} onClick={buttonHandle}>
      {text}
    </button>
  );
};

export default Button;
