import "./login.scss";

const Login = () => {
    return (
        <div className="login">
            <div className="top">
                <div className="wrapper">
                <img className="logo" src="https://assets.brand.microsites.netflix.io/assets/493f5bba-81a4-11e9-bf79-066b49664af6_cm_1440w.png?v=30" alt=""/>
           
            </div>
            </div>
           <div className="container">
               <form>
                   <h1>Sign In</h1>
                   <input type="email" placeholder="Enter your Email or Phone Number"/>
                   <input type="password" placeholder="Enter your Password"/>
                   <button className="loginButton">Sign In</button>
                   <span>New to Netflix? <b>Sign up now.</b></span>
                <small>
                    This page is protected by Google reCAPTCHA to ensure you're not a bot.<b>Learn more.</b>
                </small>
               </form>
               </div>

        </div>
    )
}

export default Login