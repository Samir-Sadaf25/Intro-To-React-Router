import React, { use } from 'react';

const Users2 = ({users2Promise}) => {
    const users = use(users2Promise);
    // console.log("this is users 2",users);
    
    return (
        <div>
            <h1>this is users 2</h1>
        </div>
    );
};

export default Users2;