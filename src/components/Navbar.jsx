//import { NavLink } from "react-router-dom";
import {Coffee} from "lucide-react";

function Navbar(){
    return (
        <nav className="nav">
            <div className="nav-inner">
                <Link to="/" className="brand">
                <span className="brand-mark"><Coffee sie={20} /> </span>
                BriBuzz
                </Link>
                <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/menu">Menu</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                </ul>
                //
                <div className="nav-links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <Link to="/menu" className="nav-cta">Order Now</Link>
                    </div> //              
           
            </div>
            
        </nav>
    );
}
export default Navbar;

//search the diff between navlink and link //
