import React from 'react';

const PostsItem = ({posts}) => {
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

export default PostsItem;