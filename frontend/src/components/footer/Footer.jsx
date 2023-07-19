import { Link } from "react-router-dom";
import Add from "../../assets/pictures/Add.png";
import Modification from "../../assets/pictures/modification.png";
import Delete from "../../assets/pictures/delete.png";

function Footer() {
  return (
    <footer className="footer">
      <Link to="/create">
        <img className="symbolModification" src={Add} alt="Ajouter" />
      </Link>
      <Link to="/modification">
        <img
          className="symbolModification"
          src={Modification}
          alt="Modification"
        />
      </Link>
      <img className="symbolModification" src={Delete} alt="Suppression" />
    </footer>
  );
}
export default Footer;
