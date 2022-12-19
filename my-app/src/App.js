import './style.css';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/select/MySelect';

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JS",  body: "Forevor"},
    { id: 2, title: "React",  body: "Best"},
    { id: 3, title: "Angular",  body: "New"}
  ]);
  const [selectedSort, setSelectedSort] = useState("");
  
  const createPost = (newPost) => {
    setPost([...posts, newPost]);
  }

  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id));
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort);
    setPost([...posts].sort((a, b) => a[sort].localeCompare(b[sort])));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <div>
        <MySelect 
          value={selectedSort}
          onChange={sortPosts}
          defaultValue="Sort"
          options={[
            { value: "title", name: "Title" },
            { value: "body", name: "Description" }
          ]}
        />
      </div>
      {posts.length < 1
        ? <h1>Posts not exists</h1>
        : <PostList remove={removePost} posts={posts} title="List posts" />
      }
    </div>
  );
}

export default App;
   