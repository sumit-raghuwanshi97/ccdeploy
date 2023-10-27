import React, { useState } from 'react';

function FilterPosts({ onFilter }) {
  const [filters, setFilters] = useState({
    company: '',
    status: '',
    role: '',
    postType: '',
  });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters({ ...filters, [name]: value });
  };

  const applyFilter = () => {
    onFilter(filters);
  };

  return (
    <div className="mb-4 my-3 ">
      <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex items-center">
          <label htmlFor="company" className="mr-2">Company:</label>
          <select
            name="company"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <select name="option1" id="">NRI Fintech</select>
            {/* Populate company options dynamically */}
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="status" className="mr-2">Status:</label>
          <select
            name="status"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            {/* Populate status options dynamically */}
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="role" className="mr-2">Role:</label>
          <select
            name="role"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            {/* Populate role options dynamically */}
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="postType" className="mr-2">Post Type:</label>
          <select
            name="postType"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            {/* Populate post type options dynamically */}
          </select>
        </div>

        <button
          onClick={applyFilter}
          className="bg-[#fb8500] hover:bg-[#ffb703] text-text-black font-bold py-2 px-4 rounded-full"
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default FilterPosts;
