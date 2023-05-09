import { createContext, useEffect, useState } from "react";
import { useInputChange } from "../customHooks/useInputChange";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movieList, setMovieList] = useState([]);

  return (
    <MovieContext.Provider value={{ movieList, setMovieList }}>
      {children}
    </MovieContext.Provider>
  );
};
