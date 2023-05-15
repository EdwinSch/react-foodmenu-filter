const CategoryButtons = ({ buttons, filterItems }) => {
  return (
    <section className="btn-container">
      {buttons.map((catButton, index) => {
        return (
          <button
            key={catButton}
            type="button"
            className="btn"
            onClick={() => filterItems(catButton)}
          >
            {catButton}
          </button>
        );
      })}
    </section>
  );
};

export default CategoryButtons;
