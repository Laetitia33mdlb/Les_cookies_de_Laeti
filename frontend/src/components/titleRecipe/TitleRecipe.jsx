import PropTypes from "prop-types";

function TitleRecipe({ name }) {
  return (
    <div className="containerTitleRecipe">
      <h1 className="titleTitleRecipe">{name}</h1>
      <div className="rating">
        <a href="#5" title="Give 5 stars">
          ★
        </a>
        <a href="#4" title="Give 4 stars">
          ★
        </a>
        <a href="#3" title="Give 3 stars">
          ★
        </a>
        <a href="#2" title="Give 2 stars">
          ★
        </a>
        <a href="#1" title="Give 1 star">
          ★
        </a>
      </div>
    </div>
  );
}
TitleRecipe.propTypes = {
  name: PropTypes.string.isRequired,
  // id: PropTypes.number.isRequired,
};
export default TitleRecipe;
