import { useState } from 'react';
import './App.css';
import Card from './components/Card/Card';
import Header from './components/Header/Header';

import jsonData from './database/posts.json';
import Article from './components/Article/Article';
import APropos from './components/APropos/APropos';

const POSTS = jsonData;

function App() {

  const [postId, setPostId] = useState<number>(0);

  const postsSize: number = POSTS.length;

  function handlePostIdChange(id: number): void {
    setPostId(id);
    console.log('postId updated! id = ' + id);
  }

  function randomInt(max: number): number {
    return Math.floor(Math.random() * max);
  }

  if (postId > 0) {
    return (
      <>
        <Header onUserClick={() => handlePostIdChange(0)} onRandomArticle={() => handlePostIdChange(randomInt(postsSize))} onAboutClick={() => handlePostIdChange(-1)} />
        <Article {...POSTS[postId - 1]} />
      </>
    )
  }

  if (postId < 0 ) {
    return (
      <>
      <Header onUserClick={() => handlePostIdChange(0)} onRandomArticle={() => handlePostIdChange(randomInt(postsSize))} onAboutClick={() => handlePostIdChange(-1)} />
      <APropos />
      </>
    )
  }

  

  return (
    <>
      <Header onUserClick={() => handlePostIdChange(0)} onRandomArticle={() => handlePostIdChange(randomInt(postsSize))} onAboutClick={() => handlePostIdChange(-1)}/>
      <div className='allCards'>
        {POSTS.map((post) => (
          <Card key={post.userId} onSelect={() => handlePostIdChange(post.userId)} {...post} />
        ))}
      </div>
    </>
  );
}

export default App;
