import { useContext, useEffect, useState } from "react";
import { MovieContext } from "../context/MovieContext";
import { urls } from "../constants";
import axios from "axios";

export const useInputChange = (value) => {
  const [input, setInput] = useState(value);
  const { setMovieList } = useContext(MovieContext);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.trim().length > 0) {
        getMovies(input);
      } else {
        getMovies("movie");
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  const getMovies = async (query) => {
    try {
      const movies = await axios(urls.movie_api, {
        params: {
          query,
        },
      });

      setMovieList(movies?.data.results);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    input,
    setInput,
  };
};
