import React from 'react';

const Post = ({ vardas, pavarde, iban, id, likutis, nuotrauka }) => {
  return (
    <div className="post">
      <div>
        <h2>{vardas}</h2>
        <h2>{pavarde}</h2>
        <h2>{iban}</h2>
        <h2>{id}</h2>
        <h2>{likutis}€</h2>
      </div>
      <div>
        <img src={nuotrauka} />
      </div>
    </div>
  );
};

export default Post;
