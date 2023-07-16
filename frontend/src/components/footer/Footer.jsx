import Add from "../../assets/pictures/Add.png";
import Modification from "../../assets/pictures/modification.png";
import Delete from "../../assets/pictures/delete.png";

function Footer() {
  return (
    <footer className="footer">
      <img className="symbolModification" src={Add} alt="Ajouter" />
      <img
        className="symbolModification"
        src={Modification}
        alt="Modification"
      />
      <img className="symbolModification" src={Delete} alt="Suppression" />
    </footer>
  );
}
export default Footer;
