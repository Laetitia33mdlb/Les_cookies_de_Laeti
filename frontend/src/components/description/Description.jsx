import { Link } from "react-router-dom";

function Description() {
  return (
    <div className="informationsRecipe">
      <div className="ingredients">
        <Link to="/recipe">
          <h3 className="titleInformationsRecipe">Ingrédients</h3>
          <ul>
            <li>Chocolat</li>
            <li>Sucre</li>
            <li>Sucre vanillé</li>
            <li> Farine</li>
          </ul>
        </Link>
      </div>
      <div className="Recipe">
        <h3 className="titleInformationsRecipe">Recette</h3>
        <p>blabla</p>
      </div>
    </div>
  );
}
export default Description;
