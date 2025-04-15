import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {
    const data = useLoaderData();
    return (
        <div>
            <h2>{data.body}</h2>
        </div>
    );
};

export default PostDetails;