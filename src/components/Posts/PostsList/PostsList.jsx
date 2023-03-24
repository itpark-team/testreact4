import React, {useEffect, useState} from 'react';
import PostsApiWorker from "../Api/PostsApiWorker";
import axios, {post} from "axios";
import PostsItem from "../PostsItem/PostsItem";

const PostsList = () => {

    let [title, setTitle] = useState("введите заголовок");

    let [posts, setPosts] = useState([]);
    let postsApiWorker = new PostsApiWorker();

    const getAllPosts = () => {
        postsApiWorker.getAllPosts()
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                    console.log("getAllPosts ERRRROR");
                }
            );
    }

    const addNewPost = () => {
        let post = {
            title: title,
            body: "bar111",
            userId: 999
        }

        postsApiWorker.addNewPost(post)
            .then(response => {
                if (response.status == 201) {
                    getAllPosts();
                }
            })
            .catch(error => {
                    console.log("addNewPost ERRRROR");
                }
            );
    }

    useEffect(() => {
        getAllPosts();
    }, []);

    return (
        <div>
            <div>
                <input type="text" value={title} onChange={(event) => setTitle(event.target.value)}/>
                <button onClick={addNewPost}>Add new post</button>
            </div>

            <PostsItem posts={posts}/>
        </div>
    );
};

export default PostsList;