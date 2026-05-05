import { useEffect } from "react";
function About () {
    useEffect(() => {
        document.title ="About BriBUZZ CAFE";
    }, []);
    return (
        <div>
            <h1>About BriBUZZ CAFE</h1>
            <p>BriBUZZ CAFE is a cozy and welcoming coffee shop that has been serving the community since 2010. Our mission is to provide a warm and inviting space where people can come together to enjoy great coffee, delicious pastries, and meaningful connections. We pride ourselves on sourcing high-quality beans from around the world and crafting each cup with care and precision. Whether you're looking for a quiet place to work, a spot to catch up with friends, or simply a delicious cup of coffee, BriBUZZ CAFE is the perfect destination.</p>

        </div>
    }
);}
export default About;