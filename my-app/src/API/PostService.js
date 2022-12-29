import axios from 'axios';

export default class PostService {
    static async getAll() {
        const linkPosts = "https://jsonplaceholder.typicode.com/posts";

        const response = await axios.get(linkPosts);
        return response.data;
    }
}