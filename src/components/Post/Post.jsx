import React from 'react';
import { Link, useNavigate } from 'react-router';

const Post = ({post}) => {
    const {id,title} = post;
    const navigate = useNavigate();
    const handleNavigate = () =>{
        navigate(`/posts/${id}`)
    }
    
    // const params = useParams();
    // console.log(params)

    return (
        <div style={{border:"2px solid red",margin:"10px",padding:"10px"}}>
            <h3>{title}</h3>
            <Link to={`/Posts/${id}`}><button>Show Details</button></Link>
            <button onClick={handleNavigate}>Details</button>
        </div>
    );
};

export default Post;