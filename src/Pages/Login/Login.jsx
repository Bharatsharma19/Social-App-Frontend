import React from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

const Login = () => {
    const navigate = useNavigate()

    const handleRegisterClick = () => {
        navigate("/register")
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
                        <input placeholder="Email" className="loginInput" />
                        <input placeholder="Password" className="loginInput" />
                        <button className="loginButton">Log In</button>
                        <span className="loginForgot">Forgot Password?</span>
                        <button className="loginRegisterButton" onClick={handleRegisterClick}>
                            Create a New Account
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
