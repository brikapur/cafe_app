import Navbar from "../components/NavBar";
import Footer from "../components/Footer";
import {MapPin, Phone, Mail, Clock} from 'lucide-react';

function Contact(){
    const items=[
        {icon: MapPin, Title:}
        {icon: Phone, title:}
        {icon: Mail, title:}
        {icon: Clock, title: }
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
                    {items.map(({Icon, title, text}) =>(
                        <div key={title} className="info-card">
                            <span className="hl-icon"><Icon sie={20} /> </span>
                            <div>
                                <h3>{title}</h3>
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
