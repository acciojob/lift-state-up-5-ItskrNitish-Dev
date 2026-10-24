import React, { useState } from 'react'

const LoginForm = ({ isLoggedIn, onLogin, username:loggedInUsername }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if(username.trim() && password.trim()){
            onLogin(username);
        }
    };

    if(isLoggedIn){
        return(
            <h2>Welcome {loggedInUsername}, You are logged in!</h2>
        )
    }

    return (
        <form onSubmit={handleSubmit}>

            <div>
                <label htmlFor='username'> Username: </label>
                <input 
                    type='text' 
                    id='username' 
                    placeholder='Name' 
                    value={username} 
                    onChange={(e) => setUsername(e.target.value)} 
                    required 
                />
            </div>
            <br/>

            <div>
                <label htmlFor='password'> Password: </label>
                <input 
                    type='password' 
                    id='password' 
                    placeholder='Password' 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                    required 
                />
            </div>
            <br/>

            <button type="submit">Login</button>

        </form>
    );
};




export default LoginForm;
