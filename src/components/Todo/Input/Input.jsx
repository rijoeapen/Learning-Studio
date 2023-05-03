import "./Input.css";
const Input = ({ type, placeholder, flex, handleChange, value }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      style={{ flex: flex }}
      onChange={handleChange}
      value={value}
    />
  );
};

export default Input;
