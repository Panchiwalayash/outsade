import React, { useRef } from 'react'
import './register.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from "axios";


export default function Register() {
    const name = useRef();
    const email = useRef();
    const password = useRef();
    const navigate = useNavigate()

    const handleClick = async (e) => {
        e.preventDefault()
       
        
            const user = {
                name: name.current.value,
                email: email.current.value,
                password: password.current.value
            }
            try {
                await axios.post("http://localhost:5000/api/auth/register", user);
                navigate("/login")
            } catch (error) {
                console.log("error");
            }
        
    }
    return (
        <div className='register'>
            <div className="registerWrapper">
                
                <form className="registerRight" onSubmit={handleClick}>
                    <input placeholder='name' type="text" className="registername" ref={name} />
                    <input placeholder='Email' type="email" className="registerEmail" ref={email} />
                    <input placeholder='Password' type="password" className="registerPassword" ref={password} />
                    
                    <div className='registerButtonDiv'>
                        <button className="registerButton">Sign Up</button>
                    </div>
                    <Link to="/login">
                        <button className="logInto">Log Into Your Account</button>
                    </Link>
                </form>
            </div>
        </div>
    )
}
