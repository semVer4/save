import './style.css';
import ClassCounter from './components/ClassCounter';
import Counter from './components/Counter';
import Test from './components/Test';
import PostItem from './components/PostItem';
import { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';

function App() {
  const [post] = useState([
    {
      id: 1, 
      title: 'JS',
      body: 'Description'
    }
  ]);

  return (
    <div className="App">
      <form>
        <input placeholder="Title" />
        <input placeholder="Description" />
        <MyButton disabled>New post</MyButton>
      </form>

      <PostList post={post} title="List posts" />
    </div>
  );
}

export default App;
   