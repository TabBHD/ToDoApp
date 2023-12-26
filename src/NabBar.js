import { Link } from "react-router-dom";
const Navbar = () => {
    
    return ( 
        <div className="navbar">
            <nav>
                <Link to="/search">Search</Link>
                <a href="/">About Us</a>
            </nav>
        </div>
     );
}
 
export default Navbar;