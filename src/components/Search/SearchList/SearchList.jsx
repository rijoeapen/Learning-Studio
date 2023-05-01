import "./SearchList.css";

export const SearchList = ({ listItems }) => {
  return (
    <div className="search-list-container">
      {listItems?.map((item) => {
        return (
          <div className="list-item" key={item.id}>
            <img
              src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
              width={50}
              height={50}
            />
            <p>{item.title}</p>
          </div>
        );
      })}
    </div>
  );
};
