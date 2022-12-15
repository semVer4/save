import MyButton from './UI/button/MyButton';
import MyInput from './UI/input/MyInput';
import { useState } from 'react';

const PostForm = ({create}) => {
    const [posts, setPosts] = useState({title: "", body: ""});

    const addPost = (e) => {
        e.preventDefault();

        const newPost = {
            id: Date.now(),
            ...posts
        }
        create(newPost);
    }

    return (
        <form>
            <MyInput 
                value={posts.title}
                onChange={e => setPosts({...posts, title: e.target.value})}
                type="text"
                placeholder="Title"
            />
            <MyInput
                value={posts.body}
                onChange={e => setPosts({...posts, body: e.target.value})}
                type="text" 
                placeholder="Description" 
            />
            <MyButton onClick={addPost}>New post</MyButton>
        </form>
    );
}

export default PostForm;