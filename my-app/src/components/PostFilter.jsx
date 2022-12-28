import MyInput from './UI/input/MyInput';
import MySelect from './UI/select/MySelect';

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <MyInput 
                value={filter.query}
                placeholder="Search..."
                onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <MySelect 
                value={filter.sort}
                onChange={selectedSort => setFilter({...filter, sort: selectedSort})}
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