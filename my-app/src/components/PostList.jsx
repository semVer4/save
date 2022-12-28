import PostItem from "./PostItem";

const PostList = ({posts, title, remove}) => {
    if (posts.length < 1) {
        return (<h1>Posts not exists</h1>)
    }

    return (
        <div>
            <h1>{title}</h1>
            {posts.map((post, index) => 
                <PostItem remove={remove} number={index + 1} post={post} key={posts.id} />
            )}
        </div>
    );
}

export default PostList;