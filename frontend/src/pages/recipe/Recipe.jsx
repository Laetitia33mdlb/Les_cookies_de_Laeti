import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from "axios";
import Description from "../../components/description/Description";
import HeaderRecipe from "../../components/headerRecipe/HeaderRecipe";
import TitleRecipe from "../../components/titleRecipe/TitleRecipe";
import UsefulInformation from "../../components/usefulInformation/UsefulInformation";

function Recipe() {
  const [data, setData] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_API}/recipes/${id}`)
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);
  return (
    <main className="mainRecipe">
      <HeaderRecipe picture={data.picture} />
      <TitleRecipe name={data.name} />
      <UsefulInformation />
      <Description />
    </main>
  );
}
export default Recipe;
