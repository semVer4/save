import MyButton from './UI/button/MyButton';

const PostItem = (props) => {
    return (
        <div className="text">
            <h1></h1>
            <div className="post">
                <div className="post__content">
                    <strong>{props.post.id}. {props.post.title}</strong>
                    <div>
                        {props.post.body}
                    </div>
                </div>
                <div className="post__btn">
                    <MyButton>Delete</MyButton>
                </div>
            </div>
        </div>
    );
}

export default PostItem;