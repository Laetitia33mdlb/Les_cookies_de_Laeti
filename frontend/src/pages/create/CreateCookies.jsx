import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Cookieschoco from "../../assets/pictures/cookies_chocolat.jfif";

function CreateCookies() {
  const [name, setName] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [numberOfPersons, setNumberOfPersons] = useState("");

  const navigateTo = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const body = {
      name,
      cookingTime,
      difficulty,
      numberOfPersons,
      picture: Cookieschoco,
    };
    try {
      const reponse = await axios.post(
        `${import.meta.env.VITE_BACKEND_URL}/recipes`,
        body
      );
      if (reponse.status === 201) {
        navigateTo("/");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <main ">
    <form onSubmit={(e) => handleSubmit(e)} className="formRecipes">
      <label htmlFor="name" className="inputAdd">
        Titre
      </label>
      <input
        name="name"
        className="interiorInput"
        type="text"
        placeholder="titre"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <label htmlFor="cookingTime" className="inputAdd">
        Temps de cuisson
      </label>
      <select
        className="interiorInput"
        onChange={(e) => setCookingTime(e.target.value)}
      >
        <option value={cookingTime}>Choisir un temps de cuisson</option>
        <option value="30">30</option>
        <option value="45">45</option>
        <option value="50">50</option>
      </select>
      <label htmlFor="difficulty" className="inputAdd">
        Difficulté
      </label>
      <select
        name="difficulty"
        className="interiorInput"
        onChange={(e) => setDifficulty(e.target.value)}
      >
        <option value={difficulty}>Choisir une difficulté</option>
        <option value="facile">Facile</option>
        <option value="moyen">Moyen</option>
        <option value="difficile">Difficile</option>
      </select>
      <label htmlFor="numberOfPersons=" className="inputAdd">
        Nombre de personnes
      </label>
      <select
        name="numberOfPersons"
        className="interiorInput"
        onChange={(e) => setNumberOfPersons(e.target.value)}
      >
        <option value={numberOfPersons}>Choisir un nombre de personnes</option>
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
    // </main>
  );
}
export default CreateCookies;
