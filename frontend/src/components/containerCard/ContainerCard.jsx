import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function ContainerCard({ name, picture, id }) {
  return (
    <Link to={`/Recipe/${id}`}>
      <div className="containerCard">
        <img className="imagecard" src={picture} alt="Cookies chocolat" />
        <div className="rating">
          <span title="Give 5 stars">★</span>
          <span title="Give 4 stars">★</span>
          <span title="Give 3 stars">★</span>
          <span title="Give 2 stars">★</span>
          <span title="Give 1 star">★</span>
        </div>
        <h4 className="titleCard">{name}</h4>
      </div>
    </Link>
  );
}

ContainerCard.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
};
export default ContainerCard;
