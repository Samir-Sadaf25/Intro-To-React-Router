import React from 'react';
import { useLoaderData } from 'react-router';
import Post from '../Post/Post';

const Posts = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2>{data.length}</h2>
            {
               data.map(post => <Post key={post.id} post={post}></Post>)
            }
        </div>
    );
};

export default Posts;