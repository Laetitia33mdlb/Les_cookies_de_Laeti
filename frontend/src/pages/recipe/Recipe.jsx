import Description from "../../components/description/Description";
import HeaderRecipe from "../../components/headerRecipe/HeaderRecipe";
import TitleRecipe from "../../components/titleRecipe/TitleRecipe";
import UsefulInformation from "../../components/usefulInformation/UsefulInformation";

function Recipe() {
  return (
    <main className="mainRecipe">
      <HeaderRecipe />
      <TitleRecipe />
      <UsefulInformation />
      <Description />
    </main>
  );
}
export default Recipe;
