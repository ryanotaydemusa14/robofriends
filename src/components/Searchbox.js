import React from "react";

const SearchBox = ({ searchfield, searchChange }) => {
  return (
    <div className="pa2">
      <input
        className="bg-light-yellow pa2 br-pill"
        type="search"
        placeholder="Search Robots"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
