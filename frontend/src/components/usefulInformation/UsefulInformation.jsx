import PropTypes from "prop-types";
import Clock from "../../assets/pictures/clock.png";
import Hat from "../../assets/pictures/hat.png";
import Fork from "../../assets/pictures/fork.png";

function UsefulInformation({ cookingTime, difficulty, numberOfPersons }) {
  return (
    <>
      <div className="PinkLine" />
      <div className="informations">
        <div className="clock">
          <img className="clock" src={Clock} alt="temps de cuisson" />
          <h3>{cookingTime}</h3>
        </div>
        <div className="hat">
          <img className="hat" src={Hat} alt="difficulté" />
          <h3> {difficulty}</h3>
        </div>
        <div className="fork">
          <img className="fork" src={Fork} alt="nombre de personnes" />
          <h3>{numberOfPersons}</h3>
        </div>
      </div>
      <div className="PinkLine" />
    </>
  );
}

UsefulInformation.propTypes = {
  cookingTime: PropTypes.number.isRequired,
  difficulty: PropTypes.string.isRequired,
  numberOfPersons: PropTypes.number.isRequired,
};
export default UsefulInformation;
