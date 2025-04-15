import React from 'react';
import { useLoaderData } from 'react-router';

const UserData = () => {
    
    const user = useLoaderData();
    // console.log(user);
    

    return (
        <div>
            <h1>this is User details</h1>
        </div>
    );
};

export default UserData;