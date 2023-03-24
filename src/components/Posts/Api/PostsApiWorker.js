import axios from "axios";

class PostsApiWorker {
    #axios;

    constructor() {
        this.#axios = axios.create({
            baseURL: "https://jsonplaceholder.typicode.com/posts"
        });
    }

    async getAllPosts() {
        return await this.#axios.get("/");
    }

    async addNewPost(post) {
        return await this.#axios.post("/", post);
    }
}

export default PostsApiWorker;