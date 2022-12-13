import './style.css';
import { useState } from 'react';
import PostList from './components/PostList';
import MyButton from './components/UI/button/MyButton';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [post, setPost] = useState([
    {
      id: 1, 
      title: 'React',
      body: 'Great library'
    }
  ]);

  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const addPost = (e) => {
    e.preventDefault();

    const newPost = {
      id: Date.now(),
      title,
      body
    }
    setPost([...post, newPost]);
  }

  return (
    <div className="App">
      <form>
        <MyInput 
          value={title}
          onChange={e => setTitle(e.target.value)}
          type="text"
          placeholder="Title"
         />
        <MyInput
          value={body}
          onChange={e => setBody(e.target.value)}
          type="text" 
          placeholder="Description" 
        />
        <MyButton onClick={addPost}>New post</MyButton>
      </form>

      <PostList post={post} title="List posts" />
    </div>
  );
}

export default App;
   