import React, { useState } from "react";
import { useSearch } from "../context/SearchContext";
import { useNavigate } from "react-router-dom";
import "./SearchBar.css";

export default function SearchBar() {
  const { performSearch, searchResults, clearSearch, isSearchOpen, setIsSearchOpen } = useSearch();
  const [inputValue, setInputValue] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    performSearch(value);
  };

  const handleResultClick = (result) => {
    navigate(result.path);
    clearSearch();
    setInputValue("");
  };

  const handleClear = () => {
    setInputValue("");
    clearSearch();
  };

  return (
    <div className="search-bar-container">
      <div className="search-bar-input-wrapper">
        <input
          type="text"
          placeholder="Search skills, projects, experience..."
          className="search-bar-input"
          value={inputValue}
          onChange={handleInputChange}
          onFocus={() => setIsSearchOpen(true)}
        />
        {inputValue && (
          <button className="search-clear-btn" onClick={handleClear}>
            ✕
          </button>
        )}
      </div>

      {isSearchOpen && inputValue && (
        <div className="search-results-dropdown">
          {searchResults.length > 0 ? (
            <div className="search-results-list">
              {searchResults.map((result) => (
                <div
                  key={result.id}
                  className="search-result-item"
                  onClick={() => handleResultClick(result)}
                >
                  <div className="result-content">
                    <p className="result-title">{result.title}</p>
                    <p className="result-category">{result.category}</p>
                    {result.description && (
                      <p className="result-description">{result.description.substring(0, 60)}...</p>
                    )}
                    {result.company && (
                      <p className="result-company">{result.company}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="search-no-results">
              No results found for "{inputValue}"
            </div>
          )}
        </div>
      )}

      {isSearchOpen && !inputValue && (
        <div
          className="search-backdrop"
          onClick={() => setIsSearchOpen(false)}
        />
      )}
    </div>
  );
}
