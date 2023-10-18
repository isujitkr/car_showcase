"use client"

import React, { useState } from "react"; // Import React
import { SearchManufacturer } from "./";


const SearchBar = () => {
  const [manufacturer, setManufacturer] = useState(" "); // Corrected syntax
  const handleSearch = () => {
    // Your search logic here
  };

  return (
    <form className="searchbar" onSubmit={handleSearch}>
      <div className="searchbar__item">
        <SearchManufacturer
          manufacturer={manufacturer}
          setManufacturer={setManufacturer}
        />
      </div>
    </form>
  );
};

export default SearchBar;
