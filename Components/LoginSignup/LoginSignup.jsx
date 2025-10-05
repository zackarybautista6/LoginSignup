import React, { useState } from 'react';
import './LoginSignup.css';


import user_icon from '../../Assets/person.png';
import email_icon from '../../Assets/email.png';
import password_icon from '../../Assets/password.png';

const LoginSignup = () => {
    
    const [action, setAction] = useState("Signup"); 

    return (
        
        <div className="container">
            
            
            <div className="left-side">
                <div className="dark">
                    
                    
                    {action === "Login" ? (
                        <>
                            <div className="logo-placeholder">LOGO</div>
                            <div className="message">Welcome Back</div>
                        </>
                    ) : (
                        <>
                            <div className="image-placeholder">X</div>
                            <p className="description-text">Description</p>
                        </>
                    )}
                </div>
            </div>

            
            <div className="form">
                
                
                <div className="header">
                    <div className="logo-text">LOGO</div>
                    <div className="welcome-text">{action === "Login" ? "Welcome Back" : "Welcome"}</div>
                </div>

                
                <div className="inputs">
                    
                    
                    {action === "Signup" ? (
                        <div className="input">
                            <img src={user_icon} alt="user icon" />
                            <input type="text" placeholder="Name" />
                        </div>
                    ) : null}

                    
                    <div className="input">
                        <img src={email_icon} alt="email icon" />
                        <input type="email" placeholder="Email Address" />
                    </div>
                    
                    
                    <div className="input">
                        <img src={password_icon} alt="password icon" />
                        <input type="password" placeholder="Password" />
                    </div>
                </div>

               
                {action === "Login" ? (
                    <div className="forgot-password">
                        Don't have an account? <span onClick={() => setAction("Signup")}>Sign up now</span>
                    </div>
                ) : (
                   
                    <div className="forgot-password">
                        Already have an account? <span onClick={() => setAction("Login")}>Sign in</span>
                    </div>
                )}


                
                <div className="submit-container">
                    
                    
                    <div className={action === "Login" ? "submit gray" : "submit"} 
                         onClick={() => {setAction("Signup")}}>Sign Up</div>
                         
                
                    <div className={action === "Signup" ? "submit gray" : "submit"} 
                         onClick={() => {setAction("Login")}}>Log in</div>
                </div>
            </div>
        </div>
    );
};

export default LoginSignup;