import React from "react";
import SearchIcon from "@mui/icons-material/Search";

const Search = ({ handleSearchNote, hasSearchResults }) => {
  return (
    <div className="search">
      <SearchIcon className="search-icons" size="1.3em" />
      <input
        onChange={(e) => handleSearchNote(e.target.value)}
        type="text"
        placeholder="type to search..."
      />
    </div>
  );
};

export default Search;
