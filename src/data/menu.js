import latte from '../assets/menu-latte.jpg';
import iced from '../assets/menu-iced.jpg';
import croissant from '../assets/menu-croissant.jpg';
import toast from '../assets/menu-toast.jpg';
import sandwich from '../assets/menu-sandwich.jpg';
import cake from '../assets/menu-cake.jpg';

const menuItems = [
    {name: "Signature Latte", description: "Our signature espresso blend with steamed milk", price: 4.50, image: latte, category: "Coffee", tag: "latte"},
    {name: "Iced Coffee", description: "Chilled coffee over ice with milk", price: 3.50, image: iced, category: "Coffee", tag: "iced"},
    {name: "Croissant", description: "Buttery, flaky pastry", price: 2.50, image: croissant, category: "Pastries", tag: "croissant"},
    {name: "Avocado Toast", description: "Sliced avocado on toasted bread", price: 5.00, image: toast, category: "Bites", tag: "toast"},
    {name: "Turkey Sandwich", description: "Fresh turkey with lettuce and tomato", price: 6.00, image: sandwich, category: "Bites", tag: "sandwich"},
    {name: "Lava Cake", description: "Warm chocolate cake with a molten center", price: 4.00, image: cake, category: "Desserts", tag: "cake"},
];