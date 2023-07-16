import React, { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
import { fetcher } from "../../services/api";
import ContainerCard from "../../components/containerCard/ContainerCard";

function Home() {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetcher("recipes")
      .then((data) => {
        setRecipes(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <div className="containerRecipes">
      {recipes.map((recipe) => (
        <ContainerCard
          key={recipe.id}
          name={recipe.name}
          picture={recipe.picture}
          id={recipe.id}
        />
      ))}
    </div>
  );
}
export default Home;
