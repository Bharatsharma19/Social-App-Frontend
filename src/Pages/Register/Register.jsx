import React from 'react'
import { useNavigate } from 'react-router-dom'
import './register.css'

const Register = () => {
    const navigate = useNavigate()

    const handleLoginClick = () => {
        navigate("/login")
    }

    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">Social</h3>
                    <span className="loginDesc">
                        Connect with friends and the world around you on Social.
                    </span>
                </div>
                <div className="loginRight">
                    <div className="loginBox">
                        <input placeholder="Username" className="loginInput" />
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <input placeholder="Password Again" className="loginInput" />
                        <button className="loginButton">Sign Up</button>
                        <button className="loginRegisterButton" onClick={handleLoginClick}>
                            Log-In to Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Register
