import { useState } from "react";

const Search = ({ setSearchTerm }) => {
  const [searchTerm, setLocalSearchTerm] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchTerm); // Call the setSearchTerm prop function with the search term
  };

  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search news"
          value={searchTerm}
          onChange={(e) => setLocalSearchTerm(e.target.value)}
        />
        <input class="btn btn-primary btn-sm align-top" type="submit" value="Submit"></input>
      </form>
  </div>
  );
  }

export default Search;


