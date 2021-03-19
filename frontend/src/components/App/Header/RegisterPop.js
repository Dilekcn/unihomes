import React from 'react'
import "./Header.css"

export default function RegisterPop({backtoLogin}) {
  return (
    <div className="regContainer">
    <form >
      <div className="logTitle">Agent Register</div>
      <hr className="logLine"/> 
      <label for="email" className="logTitleTwo"><b>Email adress</b></label>
      <input type="text" className="inputOne" id="email" placeholder="Enter Email" name="email" required/>
      <label for="psw" className="logTitleThree"><b>Password</b></label>
      <input type="password" className="inputTwo" placeholder="Enter Password" id="psw" name="psw" required/>
      <label for="psw-repeat" className="logTitleFour"><b>Repeat Password</b></label>
      <input type="password" className="inputThree" placeholder="Repeat Password" id="psw-repeat" name="psw-repeat" required/>
      <button className="signupBtn" >Sign Up</button>
      
    </form> 
      <div className="loginPlc"></div>
      <button className="loginBtn2" onClick={backtoLogin}>Login</button>
    </div>
  )
}

