import React, { Suspense, useState } from 'react';
import { Link, Navigate } from 'react-router';
import UserDetails from '../userDetails/UserDetails';

const User = ({user}) => {
    const {id,name,email,phone} = user;
    const userStyle = {
        border:'2px solid yellow',
        borderRadius:'20px',
        padding:'10px',
        margin:'10px'
    }
    
    const [showInfo,setShowInfo] = useState(false);
    const userPromise = fetch(`https://jsonplaceholder.typicode.com/users/${id}`).then(res => res.json());
    
    const [visitHome,setVisitHome] = useState(false);
    if(visitHome)
       return <Navigate to={"/"}></Navigate>

    return (
        <div style={userStyle}>
            <h3>{name}</h3>
            <p>Email : {email}</p>
            <p><small>Phone : {phone}</small></p>
            <Link to={`/Users/${id}`}>Show Details</Link>
            <button onClick={() => setShowInfo(!showInfo)}>{showInfo ? 'hide ':'show '}info</button>
            {
                showInfo && <Suspense fallback={<span>Loading...</span>}>
                    <UserDetails userPromise={userPromise}></UserDetails>
                </Suspense>
            }
            <button onClick={() => setVisitHome(true)}>Visit Home</button>
        </div>
    );
};

export default User;