import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Rectangle from "../../assets/pictures/Rectangle.png";
import BackArrow from "../../assets/pictures/back_arrow.png";

function HeaderRecipe({ picture }) {
  return (
    <div className="headerRecipe">
      <img
        className="headerCookiesChoco"
        src={picture}
        alt="cookies chocolat"
      />
      <Link to={-1}>
        <div className="backArrowRecatngle">
          <img
            className="rectangle"
            src={Rectangle}
            alt="décoration flèche retour"
          />
          <img className="backArrow" src={BackArrow} alt="flèche retour menu" />
        </div>
      </Link>
    </div>
  );
}
HeaderRecipe.propTypes = {
  picture: PropTypes.string.isRequired,
};
export default HeaderRecipe;
