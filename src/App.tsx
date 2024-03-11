import './App.css';
import Card from './components/Card/Card';

import jsonData from './database/posts.json';

const POSTS = jsonData;

function App() {
  return (
   <div>
   {POSTS.map((post) => (
    <Card key={post.userId} {...post} />
    ))}
   </div>
  );
}

export default App;
