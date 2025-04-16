import React, { use } from 'react';

const UserDetails = ({userPromise}) => {
    const user = use(userPromise);
    const {name,username} = user;
    return (
        <div>
            <p><small>User Name : {username}</small></p>
            <p>name : {name}</p>
        </div>
    );
};

export default UserDetails;