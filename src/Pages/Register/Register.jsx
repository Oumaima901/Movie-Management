import "./register.scss";
import { useState } from "react";
import { useRef } from "react";
const Register = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const emailRef = useRef();
    const passwordRef = useRef();
    const handleStart = () =>{
        setEmail(emailRef.current.value);
    }
    const handleFinish = () =>{
        setPassword(passwordRef.current.value);
    }
    return (
        <div className="register">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt=""/>
            <button className="loginButton">Sign In</button>
            </div>
            </div>
           <div className="container">
               <h1>Unlimited movies, Tv Shows, and more.</h1>
               <h2>Watch anywhere. Cancel anytime.</h2>
               <p>Ready to watch? Enter your Email to create or restart your membership.
               </p>
               {!email ?( 
               <div className="input">
                   <input type="email" placeholder="Enter your Email" ref={emailRef}/>
                   <button className="registerButton" onClick={handleStart}>Get Started</button>
               </div>
               ) :(

                <form className="input">
                   <input type="password" placeholder="Enter your password" ref={passwordRef}/>
                   <button className="registerButton" onClick={handleFinish}> Start</button>
               </form>
               )}
               </div> 

        </div>
    )
}

export default Register
