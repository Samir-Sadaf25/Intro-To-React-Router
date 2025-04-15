import React from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
    const data = useLoaderData();
    console.log(data);
    
    return (
        <div>
           <h1>this is Users page</h1> 
        </div>
    );
};

export default Users;