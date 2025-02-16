import React, { useState } from "react";
import "./searchBar.css"

const SearchDropdown = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const items = [
    { name: "Diamond Earrings", category: "Jewelery" },
    { name: "Jeans", category: "Clothes" },
    { name: "iPhone 15", category: "Electronics" },
    { name: "Pebbles", category: "Miscellaneous" },
    { name: "Harry Potter", category: "Books" },

  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleSelect = (name) => {
    setSearchInput(name);
    setIsDropdownOpen(false);
  };

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  item.category.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <form action="" className="search-bar">
      <input
        type="search"
        name="search"
        pattern=".*\\S.*"
        required
        value={searchInput}
        onChange={handleChange}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
      />
      <button className="search-btn" type="submit">
        <span>Search</span>
      </button>

      {isDropdownOpen && searchInput.length > 0 && (
        <ul className="dropdown-list">
          {filteredItems.length > 0 ? (
            filteredItems.map((item, index) => (
              <li
                key={index}
                className="dropdown-item"
                onClick={() => handleSelect(item.name)}
              >
                {item.name}
              </li>
            ))
          ) : (
            <li className="dropdown-item no-results">No results found</li>
          )}
        </ul>
      )}
    </form>
  );
};

export default SearchDropdown;


