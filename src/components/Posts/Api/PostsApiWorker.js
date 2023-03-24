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
}

export default PostsApiWorker;