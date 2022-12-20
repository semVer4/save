import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
                value={filter.sort}
                placeholder="Search..."
                onChange={e => setFilter(e.target.value)}
            />

            <MySelect 
                value={filter.query}
                onChange={sortPosts}
                defaultValue="Sort"
                options={[
                    { value: "title", name: "Title" },
                    { value: "body", name: "Description" }
                ]}
            />
        </div>
    );
}

export default PostFilter;