import React, { useState, useEffect } from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  return (
    <div className="posts-list">
      {posts.map((post, index) => (
        <Post
          key={index}
          vardas={post.vardas}
          pavarde={post.pavarde}
          iban={post.iban}
          id={post.id}
          likutis={post.likutis}
          nuotrauka={post.nuotrauka}
        />
      ))}
    </div>
  );
};

export default Posts;
