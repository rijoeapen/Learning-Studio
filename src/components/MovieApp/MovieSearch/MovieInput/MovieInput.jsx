import { useInputChange } from "../../customHooks/useInputChange";
import "./MovieInput.css";

const MovieInput = () => {
  const { setInput } = useInputChange("movie");
  return (
    <section className="movie-input-container">
      <input
        type="text"
        id="movie"
        name="movie"
        placeholder="Please enter the movie name"
        onChange={(event) => setInput(event.target.value)}
      />
      <ion-icon name="search-outline" className="search-icon"></ion-icon>
    </section>
  );
};
export default MovieInput;
