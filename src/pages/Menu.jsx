import NavBar from '../components/NavBar.jsx';
import Footer from '../components/Footer.jsx';
import MenuCard from '../components/MenuCard.jsx';
import { menuItems } from '../data/menu.js';

const categories = ['Coffee', 'Pastries', 'Bites', 'Desserts'];

function Menu() {
  return (
    <div className="page">
      <NavBar />
      <div className="menu-hero">
        <p className="eyebrow">Our Menu</p>
        <h1>Crafted to delight</h1>
        <p>From velvety lattes to molten lava cakes — every item is made with care.</p>
      </div>
      {categories.map((cat) => {
        const items = menuItems.filter((i) => i.category === cat);
        if (!items.length) return null;
        return (
          <section key={cat} className="cat-section">
            <h2>{cat}</h2>
            <div className="menu-grid">
              {items.map((item) => <MenuCard key={item.name} {...item} />)}
            </div>
          </section>
        );
      })}
      <Footer />
    </div>
  );
}
export default Menu;
