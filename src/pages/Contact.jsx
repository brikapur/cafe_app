import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {MapPin, Phone, Mail, Clock} from 'lucide-react';

function Contact(){
    const items=[
        {Icon: MapPin, Title: "Visit us"},
        {Icon: Phone, Title: "Call us"},
        {Icon: Mail, Title: "Email us"},
        {Icon: Clock, Title: "Hours"}
    ];
    return(
        <div className="page">
            <NavBar />
            <div className="contact-hero">
                <p className="eyebrow"> Contact</p>
                <h1>Come Over get some</h1>
                <p>We're always happy to chat - over coffee, of course</p>
            </div>
            <div className="contact-grid">
                <div>
                    {items.map(({Icon, Title, text}) =>(
                        <div key={Title} className="info-card">
                            <span className="hl-icon"><Icon size={20} /> </span>
                            <div>
                                <h3>{Title}</h3>
                                <p>{text}</p> 
                                </div>  
                                </div>                      
                    ))},
                </div>
                <form className="form" onSubmit={(e) => { e.preventDefault(); alert("Thank you for your message! We will get back to you soon.")}}>
                    <div className="field"><label>Name</label><input type = "text" required/> </div>
                    <div className="field"><label>Email</label><input type= "email" required/> </div>
                    <div className="field"><label>Message</label><textarea required rows={4} /> </div>
                    <button type="submit" className="btn btn-primary">Send message</button>
                    </form>
                    </div>        
            <Footer />
        </div>
    );
    }
    export default Contact;
