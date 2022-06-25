import React, { useRef } from 'react'
import './login.css'
import { Link, useNavigate } from 'react-router-dom'

export default function Login() {
    const email = useRef()
    const password = useRef()


    const navigate=useNavigate()
    const loginHandler=async(e)=>{
        e.preventDefault();
        const response = await fetch(`http://localhost:5000/api/auth/login`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              }, 
              body: JSON.stringify({ email: email.current.value, password: password.current.value })
            });
            let json= await response.json()
            //  console.log(json)
             if(json.success===true){
              localStorage.setItem("user", JSON.stringify(json.user))
              navigate("/")
              window.location.reload()
             }
              else{
                  alert("Invalid credentials");
              }
    }
    return (
        <div className='login'>
            <div className="loginWrapper">
                <form className="loginRight" >
                    <input placeholder='Email' type="email" className="loginEmail" ref={email} required />
                    <input placeholder='Password' type="password" className="loginPassword" ref={password} minLength="4" required />
                    <div className='loginButtonDiv'>
                        <button className="loginButton" onClick={loginHandler}> Log In</button>
                    </div>
                    <div className="loginPasswordReset">Forgot Password?</div>
                    <Link to="/register">
                        <button className="createNew">Create a New Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
