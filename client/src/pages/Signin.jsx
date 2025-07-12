import NavBar from "../components/NavBar";
import Button from "../components/Button";
import { useState } from "react";
import { Link } from "react-router-dom";

function Signin() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');


    const handleSubmit = (e) => {
        e.preventDefault()

        alert('form sumitted');
    }
    return (
        <>
            <NavBar />
            <div className="signin">
                <h2>Register</h2>
                <h2>Already have an Account? <Link to='/login'>Log-In</Link></h2>

                <form className="signin-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email:</label>
                    <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <br />
                    
                    <label htmlFor="password">Password:</label>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
                    <br />

                    <label htmlFor="confirmPass">Confirm Password:</label>
                    <input type="password" value={confirmPass} onChange={e => setConfirmPass(e.target.value)} required />

                    <br />

                    <Button type="submit" onclick={handleSubmit} children="submit"/>
                </form>
                
            </div>
        </>
    )
}

export default Signin;