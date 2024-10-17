import React from 'react';
import Header from './components/Header';
import Posts from './components/Posts';
import NewPost from './components/NewPost';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <NewPost/>
        <Posts />
      </main>
    </div>
  );
}

export default App;
