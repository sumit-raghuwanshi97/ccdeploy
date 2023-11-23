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
      <div className="flex flex-col justify-between md:flex-row space-y-2 md:space-y-0 md:space-x-2">
        <div className="flex items-center">
          <label htmlFor="company" className="mr-2 font-bold">Company:</label>
          <select
            name="company"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option value="">Company</option>
            <option value="Flipkart">Flipkart</option>
            <option value="Amazon">Amazon</option>
            <option value="">none</option>
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="status" className="mr-2 font-bold">Status:</label>
          <select
            name="status"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option value="">Status</option>
            <option value="Selected">Selected</option>
            <option value="Not Selected">Not Selected</option>
            <option value="Other">Other</option>
            
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="role" className="mr-2 font-bold">Role:</label>
          <select
            name="role"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option  value="">Choose a role</option>
            <option value="Full Time">Full Time</option>
            <option value="Intern">Intern</option>
            <option value="FT+Intern">FT+Intern</option>
            {/* Populate role options dynamically */}
          </select>
        </div>

        <div className="flex items-center">
          <label htmlFor="postType" className="mr-2 font-bold">Post Type:</label>
          <select
            name="postType"
            onChange={handleFilterChange}
            className="border p-2 rounded-md"
          >
            <option value=""></option>
            <option value="opt1">Full-Time</option>
            <option value="opt2">Intern</option>
            <option value="opt3">Other</option>
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
