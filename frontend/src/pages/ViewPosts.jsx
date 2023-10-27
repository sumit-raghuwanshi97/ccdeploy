import React, { useState, useEffect } from 'react';
import FilterPosts from '../components/FilterPosts/FilterPosts';
import PostCard from '../components/PostCard/PostCard';
import axios from 'axios';

function ViewPosts() {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState(posts); // Filtered posts based on user selection
 
  useEffect(() => {
    //fetching data from our bakend api 
     axios.get('/posts/getPosts')
     .then((response)=>{
      setPosts(response.data.posts);
     })
     .catch((error)=>console.log(error));
  }, []);

  const handleFilter = (filters) => {
    // Handle filtering based on user selection and update 'filteredPosts'
    // Example:
    // const filtered = posts.filter((post) => filterFunction(post, filters));
    // setFilteredPosts(filtered);
  };

  return (
    <div className=" bg-[#8ECAE6] min-h-screen p-4">
    <div className="container mx-auto p-4 ">
      <h1 className="text-4xl font-bold mb-4 text-center">Posts</h1>
      <div className="bg-white p-4 rounded shadow-md mb-4">
            
      <FilterPosts onFilter={handleFilter} />
          </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </div>
    </div>
    </div>
  );
}

export default ViewPosts;

