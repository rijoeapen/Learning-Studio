import "./SearchInput.css";
export const SearchInput = ({ input, handleChange, clearSearch }) => {
  return (
    <div className="search-input-container">
      <input
        type="text"
        placeholder="Please enter the movie name"
        onChange={(event) => {
          handleChange(event);
        }}
        value={input}
      />
      {input.trim().length > 0 && (
        <button onClick={clearSearch}>
          <img
            src="src/assets/images/cross-icon.png"
            alt="close icon"
            width="20"
            height="20"
          ></img>
        </button>
      )}
    </div>
  );
};
