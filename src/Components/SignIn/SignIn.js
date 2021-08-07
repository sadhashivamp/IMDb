import React, {useState } from "react";
import './style.css'

function SignIn() {
  
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const handleButtonClick = () => {
    
  };
  const nameChange = (event) => {
    setName(event.target.value);
  };
  const passwordChange = (event) => {
    setPassword(event.target.value);
  };
  return (
    <div className="User-Pass">
      <center>
   
          <input type="text" name = {name} placeholder="enter userName" onChange={nameChange} />
          <input type="password" placeholder="enter password" onChange={passwordChange} value={password}  />
        
      
        
          <button onClick={handleButtonClick}>SignIn</button>
          
      </center>
    </div>

  );
}
export default SignIn