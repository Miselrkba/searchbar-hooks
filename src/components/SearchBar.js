import React from "react";

const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockChange,
}) => {
  
  const handleFilterTextChange = (e) => {
    onFilterTextChange(e.target.value);
  };

  const handleInStockChange = (e) => {
    onInStockChange(e.target.checked);
  };

  return (
    <form>
      <input
        type="text"
        value={filterText}
        onChange={handleFilterTextChange}
      ></input>
      <p>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={handleInStockChange}
        ></input>
        Only show items in stock
      </p>
    </form>
  );
};

export default SearchBar;
