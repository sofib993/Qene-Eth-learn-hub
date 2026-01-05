
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search as SearchIcon } from 'lucide-react';

const Search = ({ onSearch, initialQuery = '' }) => {
  const [query, setQuery] = useState(initialQuery);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const newQuery = e.target.value;
    setQuery(newQuery);
  };

  useEffect(() => {
    if (onSearch) {
      const handler = setTimeout(() => {
        onSearch(query);
      }, 300); // 300ms debounce

      return () => {
        clearTimeout(handler);
      };
    }
  }, [query, onSearch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) {
      onSearch(query);
    } else {
      navigate(`/courses?q=${encodeURIComponent(query)}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex w-full max-w-sm items-center space-x-2">
      <input
        type="text"
        placeholder="Search for courses..."
        value={query}
        onChange={handleInputChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500"
      />
      <button type="submit" className="p-2 bg-teal-600 text-white rounded-md hover:bg-teal-700">
        <SearchIcon className="h-5 w-5" />
      </button>
    </form>
  );
};

export default Search;
