import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

import jsonData from './database/posts.json';
import Article from './components/Article/Article';

const POSTS = jsonData;

function App() {

  const [postId, setPostId] = useState(0);

  function handlePostIdChange(id: number): void {
    setPostId(id);
    console.log('postId updated! id = ' + id);
  }

  if (postId !== 0) {
    return (
      <>
        <Header />
        <Article {...POSTS[postId - 1]} />
      </>
    )
  }

  return (
    <>
      <Header />
      <div className='allCards'>
        {POSTS.map((post) => (
          <Card key={post.userId} onSelect={() => handlePostIdChange(post.userId)} {...post} />
        ))}
      </div>
    </>
  );
}

export default App;
