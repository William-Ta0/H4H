import React, { useState } from "react";

const SearchDropdown = () => {
  const [searchInput, setSearchInput] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const countries = [
    { name: "Diamond Earrings", continent: "Jewelery" },
    { name: "Jeans", continent: "Clothes" },
    { name: "iPhone 15", continent: "Electronics" },
    { name: "Pebbles", continent: "Miscellaneous" },
    { name: "Harry Potter", continent: "Books" },

  ];

  const handleChange = (e) => {
    setSearchInput(e.target.value);
    setIsDropdownOpen(true);
  };

  const handleSelect = (name) => {
    setSearchInput(name);
    setIsDropdownOpen(false);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchInput.toLowerCase()) ||
  country.continent.toLowerCase().includes(searchInput.toLowerCase())
  );

  return (
    <div className="relative w-64 mx-auto mt-10">
      <input
        type="text"
        placeholder="Search for an item..."
        value={searchInput}
        onChange={handleChange}
        onFocus={() => setIsDropdownOpen(true)}
        onBlur={() => setTimeout(() => setIsDropdownOpen(false), 200)}
        className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
      />

      {isDropdownOpen && searchInput.length > 0 && (
        <ul className="absolute w-full bg-white border border-gray-200 rounded shadow-md max-h-60 overflow-y-auto">
          {filteredCountries.length > 0 ? (
            filteredCountries.map((country, index) => (
              <li
                key={index}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSelect(country.name)}
              >
                {country.name}
              </li>
            ))
          ) : (
            <li className="px-4 py-2 text-gray-500">No results found</li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchDropdown;
