import React, {useEffect, useState} from 'react';
import PostsApiWorker from "../Api/PostsApiWorker";
import axios from "axios";

const PostsList = () => {
    let [posts, setPosts] = useState([]);
    let postsApiWorker = new PostsApiWorker();

    useEffect(async () => {
        let posts = await postsApiWorker.getAllPosts();
        setPosts(posts.data);
    }, []);

    return (
        <div>

        </div>
    );
};

export default PostsList;