import React from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router';

const PostDetails = () => {
    const data = useLoaderData();
    const navigate = useNavigate();
    const params = useParams();
    // console.log(params)
    
    return (
        <div>
            <h2>{data.body}</h2>
            <button onClick={() =>{
                navigate(-1)
            }}>go back</button>
        </div>
    );
};

export default PostDetails;