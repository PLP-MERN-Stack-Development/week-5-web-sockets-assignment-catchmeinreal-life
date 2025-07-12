import { Link } from "react-router-dom"
import { useState } from "react"
import '../styles/Login.css'

import Button from "../components/Button";
import NavBar from "../components/NavBar";

function Login() {
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
    }
 
    return(
        <>
        <NavBar />
        <div className="login-container">
            <h2>New here? <Link to='/signin'>Sign-Up</Link></h2>

            <form className="login-form" onSubmit={handleSubmit}>
                <h1>Login to your account</h1>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                    placeholder="Enter your email" 
                    required 
                />

                {/* <label htmlFor="password">Password:</label>
                <input 
                    type="password" 
                    id="password" 
                    placeholder="Enter your password" 
                    required 
                /> */}
                <Button className="btn" type="submit" children="Login"/>
            
            </form>

        </div>
        </>
    )
}

export default Login