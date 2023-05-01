import { useState } from "react";
import "./Search.css";
import { SearchInput } from "./SearchInput/SearchInput";
import { SearchList } from "./SearchList/SearchList";
import { useEffect } from "react";
import axios from "axios";

const base_url =
  "https://api.themoviedb.org/3/search/movie?api_key=d3449ff6ec0c027623bf6b6f5fff78b3&language=en-US&page=1&include_adult=false";

const Search = () => {
  const [listItems, setListItems] = useState([]);
  const [filteredList, setFilteredList] = useState([]);
  const [input, setInput] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (input.trim().length > 0) {
        fetchMovies(input);
      }
    }, 300);

    return () => {
      clearTimeout(timeout);
    };
  }, [input]);

  const fetchMovies = async (query) => {
    try {
      const returnObj = await axios(base_url, {
        params: {
          query,
        },
      });
      setListItems(returnObj.data.results);
      //   setFilteredList(returnObj.data.results);
    } catch (err) {
      console.log(err);
    }
  };

  const handleChange = (event) => {
    setInput(event.target.value);

    // Client side filtering
    // if (event.target.value.trim().length > 0) {
    //   const filteredArr = listItems.filter((item) => {
    //     return item.title
    //       .toLowerCase()
    //       .includes(event.target.value.trim().toLowerCase());
    //   });
    //   setFilteredList(filteredArr);
    // } else {
    //   setFilteredList([]);
    // }
  };

  const clearSearch = () => {
    setInput("");
    // setFilteredList([]);
    setListItems([]);
  };

  return (
    <div className="search-container">
      <section className="heading-section">
        <img src="src/assets/images/search-icon.png" alt="search-icon"></img>
        <h1>Looking for a movie?</h1>
      </section>

      <SearchInput
        input={input}
        handleChange={handleChange}
        clearSearch={clearSearch}
      />
      {input.trim().length > 0 && listItems.length > 0 ? (
        <SearchList listItems={listItems} />
      ) : input.trim().length > 0 && listItems.length === 0 ? (
        <p className="not-found">No items found.</p>
      ) : null}
    </div>
  );
};

export default Search;
