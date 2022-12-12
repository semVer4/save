import './style.css';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import Test from './components/Test';
import PostItem from './components/PostItem';
import { useState } from 'react';
import PostList from './components/PostList';

function App() {
  const [post, setPost] = useState([
    {
      id: 1, 
      title: 'JS',
      body: 'Description'
    }
  ]);

  return (
    <div className="App">
      <PostList post={post} />
    </div>
  );
}

export default App;
   