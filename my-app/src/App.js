import './style.css';
import { useEffect, useState } from 'react';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import PostFilter from './components/PostFilter';
import MyModal from './components/UI/modal/MyModal';
import MyButton from './components/UI/button/MyButton';
import { usePosts } from './hooks/usePosts';
import PostService from './API/PostService';
import { useFetching } from './hooks/useFetching';

function App() {
  const [posts, setPost] = useState([]);

  const [filter, setFilter] = useState({sort: "", query: ""});
  const [modal, setModal] = useState(false);

  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const posts = await PostService.getAll();
    setPost(posts);
  });

  useEffect(() => {
    fetchPosts();
  }, []);

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

      {postError &&
        <h1>Server error!</h1>
      }

      {isPostLoading
        ? <h1>Loading...</h1>
        : <PostList remove={removePost} posts={sortedAndSearchPosts} title="List posts" />
      }
    </div>
  );
}
export default App;
   