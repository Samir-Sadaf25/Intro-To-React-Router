import React from 'react';
import { Link } from 'react-router';

const Post = ({post}) => {
    const {id,title} = post;
    return (
        <div style={{border:"2px solid red",margin:"10px",padding:"10px"}}>
            <h3>{title}</h3>
            <Link to={`/Posts/${id}`}><button>Show details</button></Link>
        </div>
    );
};

export default Post;