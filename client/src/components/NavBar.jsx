import { Link, useLocation, useNavigate } from "react-router-dom"
import Button from "./Button";

import "../styles/NavBar.css"



function NavBar() {
    const location = useLocation();
    const navigate = useNavigate();

    function goToLogin (){
        navigate('/login');
    }
    function goToSignin (){
        navigate('/signin');
    }

    return(
        <div className="navBar">
            <div className="logo">
                <img src="" alt="mocha-mEssaging" />
            </div>
            <ul className="navList">
                <li><Link to='/' replace>Home</Link></li>
                <li><Link to='/About' replace>About</Link></li>
                <li><Link to='/Contact' replace>Contact</Link></li>
            </ul>
            {location.pathname === "/login" ? <Button className="btn" type="signin" children="Sign-In" onclick={goToLogin}/> : null}
            {location.pathname === "/signin" ? <Button className="btn" type="login" children="Log-In" onclick={goToSignin}/> : null}

            {location.pathname === "/" ? <>
                <Button className="btn" type="login" children="Log-In" onclick={goToLogin}/>
                <Button className="btn" type="login" children="Sign-In" onclick={goToSignin}/>
            </> : null}
           

        </div>
    )
}

export default NavBar;