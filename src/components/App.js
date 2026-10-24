
import React, { useState } from "react";
import './../styles/App.css';
import LoginForm from "./LoginForm";




const App = () => {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  const handleLogIn = (name) => {
    setUsername(name);
    setIsLoggedIn(true);
  };

  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Parent Component</h1>

        <LoginForm 
          isLoggedIn = {isLoggedIn} 
          onLogin = {handleLogIn} 
          username={username}
        />   
    </div>
  );
};

export default App;
