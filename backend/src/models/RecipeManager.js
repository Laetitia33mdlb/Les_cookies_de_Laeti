const AbstractManager = require("./AbstractManager");

class RecipeManager extends AbstractManager {
  constructor() {
    super({ table: "recipe" });
  }

  addRecipe(recipe) {
    return this.database.query(
      `insert into ${this.table} (name, cooking_time, difficulty, number_of_persons, picture) values (?, ?, ?, ?, ?)`,
      [
        recipe.name,
        recipe.cookingTime,
        recipe.difficulty,
        recipe.numberOfPersons,
        recipe.picture,
      ]
    );
  }

  update(recipe) {
    return this.database.query(
      `update ${this.table} set name = ?, cooking_time = ?, difficulty = ?, number_of_persons = ? where id = ?`,
      [
        recipe.name,
        recipe.cookingTime,
        recipe.difficulty,
        recipe.numberOfPersons,
        recipe.id,
      ]
    );
  }
}

module.exports = RecipeManager;
