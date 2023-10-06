import {useState} from 'react';

const GuestUser = () => {
    return(
       <h1>Hi  I am a guest user</h1> 
    )
}

const LoggedInUser = () => {
    return(
        <h1>Hi I am a logged in user</h1>
    )
}

const Main = () => {
    const [isLoggedIn,setIsLoggedIn] =  useState(false);

    function handleClick(){
        setIsLoggedIn(!isLoggedIn);
    }
    return(
        <div>
            <button onClick={handleClick} 
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded justify-center align-middle">
                {isLoggedIn ? "LogIn" : "LogOut"}
            </button>
            {isLoggedIn ? <LoggedInUser/> : <GuestUser />}
        </div>
    )
}

export default Main;