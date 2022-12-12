import PostItem from "./PostItem";

const PostList = ({post}) => {
    return (
        <div>
            {post.map(posts => 
                <PostItem post={posts} key={posts.id} />
            )}
        </div>
    );
}

export default PostList;