import React, { useState, useEffect } from 'react';
import FilterPosts from '../components/FilterPosts/FilterPosts';
import PostCard from '../components/PostCard/PostCard';

function ViewPosts() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts); // Filtered posts based on user selection

  useEffect(() => {
    // Fetch posts from your API or data source and update the 'posts' state
    // Example:
    // fetchPosts()
    //   .then((data) => setPosts(data))
    //   .catch((error) => console.error(error));
  }, []);

  const handleFilter = (filters) => {
    // Handle filtering based on user selection and update 'filteredPosts'
    // Example:
    // const filtered = posts.filter((post) => filterFunction(post, filters));
    // setFilteredPosts(filtered);
  };

  return (
    <div className=" bg-[#219EBC] min-h-screen p-4">
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-4 text-center">Posts</h1>
      <div className="bg-[#8ECAE6] p-4 rounded shadow-md mb-4">
            
      <FilterPosts onFilter={handleFilter} />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredPosts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default ViewPosts;

