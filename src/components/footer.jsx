import{Coffee, Facebook, Instagram, Twitter}from"lucide-react";
import{Link}from"react-router-dom";
function Footer() {
    return(
        <footer classname="footer">
            <div classname="footer-inner">
             <div>

                //Coffee icon renders as an svg, it sits next to the cafe name in the footer, giving it a unique and recognizable brand identity.//
                
                <div classname="brand" style={{color:'#fff'}}>
                  <span classname="brand-mark"><Coffee size={20} /></span> 
                    BriBuzz Cafe 
                </div>

                //This tagline adds a warm and inviting touch to the footer, reinforcing the cafe's commitment to quality and customer experience.//
                
                <p style={{marginTop:'0.8rem'}}>Brewed with love. Served with a buzz. Your cozy corner since 2025.</p>
                <div classname="socials">
                    <a href="#" aria-label="Instagram"><Instagram size={18} /></a>
                    <a href="#" aria-label="Facebook"><Facebook size={18} /></a>
                    <a href="#" aria-label="Twitter"><Twitter size={18} /></a>
                </div>
                </div>   
            </div>
            <div>
                //Links to other pages//
                <h4>Explore</h4>
                <ul>
                    <li><Link to="/menu">Menu</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                </ul>
          </div>

          <div>
            <h4>Hours</h4>
            <p>Mon-Frid 8AM-8PM <br />Weekends 8AM-7PM </p>
          </div>

          <div>
            <h4>Visit us</h4>
            <p>123 Coffee Street, <br /> Brew City </p>
          </div>

          <p classname= "copyright" copy {new Date().getFullYear()} Bribuzz Cafe . All Rights Reserved . </p>

    );
}
export default footer;