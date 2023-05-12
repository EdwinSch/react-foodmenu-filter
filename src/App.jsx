import Title from "./components/Title";
import Menu from "./components/Menu";
import menu from "./data.js";

import { useState } from "react";

const App = () => {
  const [menuItems, setMenuItems] = useState(menu);

  console.log(menuItems);

  return (
    <main>
      <section className="menu">
        <Title text="menu" />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};
export default App;
