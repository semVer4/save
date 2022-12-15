import PostItem from "./PostItem";

const PostList = ({post, title, removePost}) => {
    return (
        <div>
            <h1>{title}</h1>
            {post.map((posts, index) => 
                <PostItem remove={removePost} number={index + 1} post={posts} key={posts.id} />
            )}
        </div>
    );
}

export default PostList;