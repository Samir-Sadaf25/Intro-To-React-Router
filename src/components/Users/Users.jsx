import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {
    const data = useLoaderData();
    // console.log(data);
    
    return (
        <div>
           <h1>this is Users page</h1> 
           {
              data.map(user => <User key={user.id} user={user}></User>)
           }
        </div>
    );
};

export default Users;