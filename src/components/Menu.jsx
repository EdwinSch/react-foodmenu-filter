import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-container">
      {items.map((singleItem) => {
        return <MenuItem key={singleItem.id} {...singleItem} />;
      })}
    </div>
  );
};

export default Menu;
