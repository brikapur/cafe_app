import { useNavigate } from "react-router-dom"
function Home () {
    const navigate = useNavigate();
    return (
        <div>
            <h1>BriBUZZ CAFE</h1>
            <h2>Welcome to BriBUZZ CAFE!</h2>
            <p>Experience the perfect blend of coffee and community at BriBUZZ CAFE. Whether you're looking for a cozy spot to work, catch up with friends, or simply enjoy a delicious cup of coffee, we've got you covered. Our menu features a variety of coffee blends, teas, and delectable pastries made from the finest ingredients.</p>
            <button onClick = {() => navigate("/menu")} >Explore Our Menu</button>
            
        </div>
    );
}
export default Home;