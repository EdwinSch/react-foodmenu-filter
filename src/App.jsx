import Title from "./components/Title";
import Menu from "./components/Menu";
import CategoryButtons from "./components/CategoryButtons";
import menu from "./data.js";

import { useState } from "react";

// Shorthand map, returns category
const mapCategories = menu.map((item) => item.category);
// Create new reduced set for u nique category items
const categoriesSet = new Set(mapCategories);
// Spread to new array to render buttons
const allCategories = ["all", ...categoriesSet];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  // console.log(menuItems);

  return (
    <main>
      <section className="menu">
        <Title text="menu" />
        <CategoryButtons buttons={categories} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
