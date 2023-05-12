const CategoryButtons = ({ buttons }) => {
  return (
    <section className="btn-container">
      {buttons.map((catButton, index) => {
        return (
          <button key={catButton} type="button" className="btn">
            {catButton}
          </button>
        );
      })}
    </section>
  );
};

export default CategoryButtons;
