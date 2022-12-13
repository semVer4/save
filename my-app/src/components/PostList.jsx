import PostItem from "./PostItem";

const PostList = ({post, title}) => {
    return (
        <div>
            <h1>{title}</h1>
            {post.map((posts, index) => 
                <PostItem number={index + 1} post={posts} key={posts.id} />
            )}
        </div>
    );
}

export default PostList;