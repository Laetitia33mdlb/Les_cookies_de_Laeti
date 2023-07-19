import React, { useEffect, useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
// import Description from "../../components/description/Description";
import HeaderRecipe from "../../components/headerRecipe/HeaderRecipe";
import TitleRecipe from "../../components/titleRecipe/TitleRecipe";
import UsefulInformation from "../../components/usefulInformation/UsefulInformation";

function Recipe() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const navigateTo = useNavigate();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_API}/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOnClickSupp = async (e) => {
    e.preventDefault();
    try {
      const reponse = await axios.delete(
        `${import.meta.env.VITE_BACKEND_URL}/recipes/${recipe.id}`
      );
      if (reponse.status === 204) {
        navigateTo("/");
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="mainRecipe">
      <HeaderRecipe picture={recipe.picture} />
      <TitleRecipe name={recipe.name} />
      <UsefulInformation
        cookingTime={recipe.cooking_time}
        difficulty={recipe.difficulty}
        numberOfPersons={recipe.number_of_persons}
      />
      {/* <Description /> */}
      <div className="buttonUpdateDelete">
        <Link to={`/modification/${id}`}>
          <button type="button" className="button">
            Modifier
          </button>
        </Link>
        <button className="button" type="button" onClick={handleOnClickSupp}>
          Supprimer
        </button>
      </div>
    </div>
  );
}
export default Recipe;
