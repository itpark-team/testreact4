import React, {useEffect, useState} from 'react';
import PostsApiWorker from "../Api/PostsApiWorker";
import axios, {post} from "axios";

const PostsList = () => {
    let [posts, setPosts] = useState([]);
    let postsApiWorker = new PostsApiWorker();

    useEffect(() => {
        postsApiWorker.getAllPosts().then(response => {
            setPosts(response.data);
        });
    }, []);

    return (
        <div>
            {
                posts.length == 0
                    ? <div>Данных нет</div>
                    : posts.map(post => {
                        return <div key={post.id}>{post.title}</div>
                    })
            }
        </div>
    );
};

export default PostsList;