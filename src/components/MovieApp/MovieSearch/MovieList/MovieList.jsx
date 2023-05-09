import { useContext } from "react";
import "./MovieList.css";
import { MovieContext } from "../../context/MovieContext";
import { ThemeContext } from "../../context/ThemeContext";
import { themes } from "../../constants";

const MovieList = () => {
  const { movieList } = useContext(MovieContext);
  const { theme } = useContext(ThemeContext);

  return (
    <section className="movie-list-container">
      <div className="movie-list">
        {movieList?.map((movie) => {
          return (
            <span key={movie.id}>
              <img
                src={`https://image.tmdb.org/t/p/w500/${movie?.poster_path}`}
                alt={movie?.poster_path}
                style={{
                  boxShadow:
                    theme === themes.light
                      ? "var(--box-shadow-light)"
                      : "var(--box-shadow-dark)",
                }}
              />
            </span>
          );
        })}
      </div>
    </section>
  );
};
export default MovieList;
