import React, { useState, useEffect } from 'react';
import Post from './Post';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newLikutis, setNewLikutis] = useState('');

  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    setPosts(savedPosts);
  }, []);

  const handleEdit = (index) => {
    setEditingIndex(index);
    setNewLikutis(posts[index].likutis);
  };

  const handleSave = (index) => {
    const updatedPosts = [...posts];
    updatedPosts[index].likutis = newLikutis;
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setEditingIndex(null);
    setNewLikutis('');
  };

  const handleCancel = () => {
    setEditingIndex(null);
    setNewLikutis('');
  };

  return (
    <div className="posts-list">
      {posts.map((post, index) => (
        <div key={index} className="post-item">
          <Post
            vardas={post.vardas}
            pavarde={post.pavarde}
            iban={post.iban}
            id={post.id}
            likutis={post.likutis}
            nuotrauka={post.nuotrauka}
          />
          {editingIndex === index ? (
            <div className="edit-likutis">
              <input
                type="number"
                value={newLikutis}
                onChange={(e) => setNewLikutis(e.target.value)}
              />
              <button onClick={() => handleSave(index)}>Išsaugoti</button>
              <button onClick={handleCancel}>Atšaukti</button>
            </div>
          ) : (
            <button onClick={() => handleEdit(index)}>Redaguoti likutį</button>
          )}
        </div>
      ))}
    </div>
  );
};

export default Posts;