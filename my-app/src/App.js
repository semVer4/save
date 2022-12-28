import './style.css';
import { useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';

function App() {
  const [posts, setPost] = useState([
    { id: 1, title: "JS",  body: "Forevor"},
    { id: 2, title: "React",  body: "Best"},
    { id: 3, title: "Angular",  body: "New"}
  ]);

  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false);
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const createPost = (newPost) => {
    setPost([...posts, newPost]);
    setModal(false);
  }

  const removePost = (post) => {
    setPost(posts.filter(p => p.id !== post.id));
  }

  return (
    <div className="App">
      <MyButton onClick={() => setModal(true)}>Создать пост</MyButton>
      <MyModal visible={modal} setVisible={setModal} >
        <PostForm create={createPost} />
      </MyModal>
      <PostFilter
        filter={filter}
        setFilter={setFilter}
      />
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="List posts" />
    </div>
  );
}
export default App;
   