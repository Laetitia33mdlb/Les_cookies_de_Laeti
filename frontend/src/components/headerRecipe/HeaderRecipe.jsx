import { Link } from "react-router-dom";
import Cookieschoco from "../../assets/pictures/cookies_chocolat.jfif";
import Rectangle from "../../assets/pictures/Rectangle.png";
import BackArrow from "../../assets/pictures/back_arrow.png";

function HeaderRecipe() {
  return (
    <div className="headerRecipe">
      <img
        className="headerCookiesChoco"
        src={Cookieschoco}
        alt="cookies chocolat"
      />
      <Link to="/">
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
export default HeaderRecipe;
