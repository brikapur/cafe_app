import { NavLink } from "react-router-dom";
import {Coffee} from "lucide-react";

function Navbar(){
    return (
        <nav className="nav">
            <div className="nav-inner">
                <Link to="/" className="brand">
                    <span className="brand-mark"><Coffee size={20} /> </span>
                    BriBuzz
                </Link>
                
                <div className="nav-links">
                    <NavLink to="/" end>Home</NavLink>
                    <NavLink to="/menu">Menu</NavLink>
                    <NavLink to="/about">About</NavLink>
                    <NavLink to="/contact">Contact</NavLink>
                    <Link to="/menu" className="nav-cta">Order Now</Link>
                    </div>           
            </div>
            
        </nav>
    );
}
export default Navbar;

//search the diff between navlink and link //
