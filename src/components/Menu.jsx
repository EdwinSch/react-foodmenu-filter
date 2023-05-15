import MenuItem from "./MenuItem";

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((singleItem) => {
        return <MenuItem key={singleItem.id} {...singleItem} />;
      })}
    </div>
  );
};

export default Menu;
