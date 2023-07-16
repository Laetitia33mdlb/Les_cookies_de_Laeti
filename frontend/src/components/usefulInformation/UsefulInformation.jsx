import Clock from "../../assets/pictures/clock.png";
import Hat from "../../assets/pictures/hat.png";
import Fork from "../../assets/pictures/fork.png";

function UsefulInformation() {
  return (
    <>
      <div className="PinkLine" />
      <div className="informations">
        <div className="clock">
          <img className="clock" src={Clock} alt="temps de cuisson" />
          <h3>30 min</h3>
        </div>
        <div className="hat">
          <img className="hat" src={Hat} alt="difficulté" />
          <h3> Facile</h3>
        </div>
        <div className="fork">
          <img className="fork" src={Fork} alt="nombre de personnes" />
          <h3>4 personnes</h3>
        </div>
      </div>
      <div className="PinkLine" />
    </>
  );
}
export default UsefulInformation;
