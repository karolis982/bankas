import React, { useState } from 'react';

const NewPost = () => {
  const [post, setPost] = useState({
    vardas: '',
    pavarde: '',
    iban: '',
    id: '',
    likutis: '',
    nuotrauka: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const savedPosts = JSON.parse(localStorage.getItem('posts')) || [];
    savedPosts.push(post);
    localStorage.setItem('posts', JSON.stringify(savedPosts));
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit} className="new-post-form">
      <input
        name="vardas"
        value={post.vardas}
        onChange={handleChange}
        placeholder="Įrašykite vardą"
        required
      />
      <input
        name="pavarde"
        value={post.pavarde}
        onChange={handleChange}
        placeholder="Įrašykite pavardę"
        required
      />
      <input
        name="iban"
        value={post.iban}
        onChange={handleChange}
        placeholder='Įrašykite sąskaitos numerį'
        required
      />
      <input
        name="id"
        value={post.id}
        onChange={handleChange}
        placeholder="Įrašykite asmens kodą"
        required
      />
      <input
        name="likutis"
        value={post.likutis}
        onChange={handleChange}
        placeholder="Kiek pinigų turite?"
        required
      />
      <input
        name="nuotrauka"
        value={post.nuotrauka}
        onChange={handleChange}
        placeholder="Įkelkite nuotrauką"
        required
      />
      <div className='submit'>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
