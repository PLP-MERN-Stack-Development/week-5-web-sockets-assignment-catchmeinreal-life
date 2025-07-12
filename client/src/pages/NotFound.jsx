/**
 * NotFound page
 */

import { Link } from "react-router-dom"

function NotFound() {

    return(
        <div>
            <h1>Page not Available</h1>
            <Link to='/' replace>Home</Link>
        </div>
    )
}

export default NotFound;