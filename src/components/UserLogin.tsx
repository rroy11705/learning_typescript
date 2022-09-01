import React, { useState } from 'react'

type UserProp = {
    username: string;
    email: string;
}

const UserLogin = () => {
    // const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
    // const handleButtonClick = () => {
    //     setIsLoggedIn(!isLoggedIn)
    // }

    // return (
    //     <div>
    //         <button type="button" onClick={handleButtonClick}>{isLoggedIn ? 'Log Out' : 'Log In'}</button>
    //         <div>User is {isLoggedIn ? "Logged In" : "Logged Out"}</div>
    //     </div>
    // )

    // const [user, setUser] = useState<UserProp | null>(null);
    const [user, setUser] = useState<UserProp>({} as UserProp);
    const handleButtonClick = () => {
        if (user.username === undefined) 
            setUser({
                username: "Rahul Roy",
                email: "rroy@gmail.com"
            });
        else
            setUser({} as UserProp)
    }

    return (
        <div>
            <button type="button" onClick={handleButtonClick}>{user.username ? 'Log Out' : 'Log In'}</button>
            {/* <div>
                {user 
                    ? <>
                        <div>User Name is {user.username}</div>
                        <div>User Email is {user.email}</div>
                    </>
                    : "Please Login"
                }
            </div> */}
            <div>User Name is {user?.username}</div>
            <div>User Email is {user?.email}</div>
        </div>
    )
}

export default UserLogin