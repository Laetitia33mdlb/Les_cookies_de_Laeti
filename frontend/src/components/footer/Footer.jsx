import { Link } from "react-router-dom";
import Add from "../../assets/pictures/Add.png";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/create">
        <img className="symbolModification" src={Add} alt="Ajouter" />
      </Link>
    </footer>
  );
}
export default Footer;
