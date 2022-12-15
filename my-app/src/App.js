import './style.css';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';

function App() {
  const [post, setPost] = useState([
    {
      id: 1, 
      title: 'React',
      body: 'Great library'
    }
  ]);
  
  const createPost = (newPost) => {
    setPost([...post, newPost]);
  }

  const removePost = (posts) => {
    setPost(post.filter(p => p.id !== posts.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostList remove={removePost} post={post} title="List posts" />
    </div>
  );
}

export default App;
   