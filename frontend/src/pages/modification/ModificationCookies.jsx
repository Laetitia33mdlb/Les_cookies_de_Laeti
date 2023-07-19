import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";

function ModificationCookies() {
  const [recipe, setRecipe] = useState([]);
  const { id } = useParams();
  const [name, setName] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_API}/recipes/${id}`)
      .then((response) => {
        setRecipe(response.data);
        setName(response.data.name);
        setCookingTime(response.data.cooking_time);
        setDifficulty(response.data.difficulty);
        setNumberOfPersons(response.data.number_of_persons);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      id,
      name,
      cookingTime,
      difficulty,
      numberOfPersons,
    };
    try {
      const reponse = await axios.put(
        `${import.meta.env.VITE_BACKEND_URL}/recipes/${id}`,
        body
      );
      if (reponse.status === 204) {
        navigateTo(`/recipes/${id}`);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)} className="formRecipes">
        <label className="inputAdd"> Titre : {recipe.name} </label>
        <input
          className="interiorInput"
          type="text"
          placeholder={recipe.name}
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="cookingTime" className="inputAdd">
          Temps de cuisson : {recipe.cooking_time} min
        </label>
        <select
          className="interiorInput"
          onChange={(e) =>
            setCookingTime(
              e.target.value === "" ? recipe.cooking_time : e.target.value
            )
          }
        >
          <option value={cookingTime}>Choisir un temps de cuisson</option>
          <option value="30">30</option>
          <option value="45">45</option>
          <option value="50">50</option>
        </select>
        <label className="inputAdd"> Difficulté : {recipe.difficulty} </label>
        <select
          className="interiorInput"
          onChange={(e) =>
            setDifficulty(
              e.target.value === "" ? recipe.difficulty : e.target.value
            )
          }
        >
          <option value={difficulty}>Choisir une difficulté</option>
          <option value="facile">Facile</option>
          <option value="moyen">Moyen</option>
          <option value="difficile">Difficile</option>
        </select>
        <label className="inputAdd">
          {" "}
          Nombre de personnes : {recipe.number_of_persons}{" "}
        </label>
        <select
          className="interiorInput"
          onChange={(e) =>
            setNumberOfPersons(
              e.target.value === "" ? recipe.number_of_persons : e.target.value
            )
          }
        >
          <option value={numberOfPersons}>
            Choisir un nombre de personnes
          </option>
          <option value="4">4</option>
          <option value="8">8</option>
          <option value="12">12</option>
        </select>
        <div>
          <button className="buttons" type="submit">
            Valider
          </button>
        </div>
      </form>
    </div>
  );
}
export default ModificationCookies;
