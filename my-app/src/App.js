import './style.css';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPost] = useState([]);
  
  const createPost = (newPost) => {
    setPost([...posts, newPost]);
  }

  const removePost = (post) => {
    setPost(posts.filter(p => p.id != post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <MySelect 
          options={[]}
          defaultValue="Test"
        />
      </div>
      {posts.length < 1
        ? <h1>Постов не существует</h1>
        : <PostList remove={removePost} posts={posts} title="List posts" />
      }
    </div>
  );
}

export default App;
   