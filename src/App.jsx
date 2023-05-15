import Title from "./components/Title";
import Menu from "./components/Menu";
import CategoryButtons from "./components/CategoryButtons";
import menu from "./data.js";

import { useState } from "react";

// Shorthand map, returns category
const mapCategories = menu.map((item) => item.category);
// Create new reduced set for unique category items
const categoriesSet = new Set(mapCategories);
// Spread to new array to render buttons
const allCategories = ["all", ...categoriesSet];

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);
  const [categories, setCategories] = useState(allCategories);

  // filter functionality
  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(menu);
      return;
    }

    // console.log(category);
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };

  return (
    <main>
      <section className="menu">
        <Title text="menu" />
        <CategoryButtons buttons={categories} filterItems={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default App;
