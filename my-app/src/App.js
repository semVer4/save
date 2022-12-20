import './style.css';
import { useMemo, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JS",  body: "Forevor"},
    { id: 2, title: "React",  body: "Best"},
    { id: 3, title: "Angular",  body: "New"}
  ]);

  const [filter, setFilter] = useState({sort: "", query: ""});

  const sortedPosts = useMemo(() => {
    if (filter.sort) {
      return [...posts].sort((a, b) => a[filter.sort].localeCompare(b[filter.sort]));
    } else {
      return posts;
    }
  }, [filter.sort, posts]); 

  const sortedAndSearchPosts = useMemo(() => {
    return sortedPosts.filter(post => post.title.toLowerCase().includes(filter.query.toLowerCase()));
  }, [filter.query, sortedPosts]);

  const createPost = (newPost) => {
    setPost([...posts, newPost]);
  }

  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <PostForm create={createPost} />
      <PostFilter
      />

      {sortedAndSearchPosts.length < 1
        ? <h1>Posts not exists</h1>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="List posts" />
      }
    </div>
  );
}

export default App;
   