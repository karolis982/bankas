import React, { useState, useEffect } from 'react';

const generateLithuanianIBAN = () => {
  const countryCode = 'LT';
  const checkDigits = Math.floor(10 + Math.random() * 90).toString();
  const bankAccountNumber = Array.from({ length: 16 }, () => Math.floor(Math.random() * 10)).join('');
  return countryCode + checkDigits + bankAccountNumber;
};

const isValidLithuanianId = (id) => {
  if (!/^\d{11}$/.test(id)) return false;

  const firstDigit = parseInt(id[0], 10);
  if (firstDigit < 1 || firstDigit > 6) return false;

  const year = parseInt(id.substring(1, 3), 10);
  const month = parseInt(id.substring(3, 5), 10);
  const day = parseInt(id.substring(5, 7), 10);

  if (month < 1 || month > 12) return false;

  const daysInMonth = new Date(2000 + year, month, 0).getDate();
  if (day < 1 || day > daysInMonth) return false;

  return true;
};

const NewPost = () => {
  const [post, setPost] = useState({
    vardas: '',
    pavarde: '',
    iban: '',
    id: '',
    likutis: 0,
    nuotrauka: ''
  });

  const [idError, setIdError] = useState('');

  useEffect(() => {
    setPost(prevPost => ({ ...prevPost, iban: generateLithuanianIBAN() }));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPost({ ...post, [name]: value });

    if (name === 'id') {
      setIdError(isValidLithuanianId(value) ? '' : 'Asmens kodas neteisingas');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isValidLithuanianId(post.id)) {
      setIdError('Asmens kodas neteisingas');
      return;
    }

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
        placeholder="Įrašykite sąskaitos numerį"
        required
      />
      <input
        name="id"
        value={post.id}
        onChange={handleChange}
        placeholder="Įrašykite asmens kodą"
        required
      />
      {idError && <div className="error">{idError}</div>}
      <input
        name="nuotrauka"
        value={post.nuotrauka}
        onChange={handleChange}
        placeholder="Įkelkite nuotrauką"
        required
      />
      <div className="submit">
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

export default NewPost;
