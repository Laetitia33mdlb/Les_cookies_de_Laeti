const express = require("express");

const router = express.Router();

const RecipeControllers = require("./controllers/RecipeControllers");

router.get("/recipes", RecipeControllers.browse);
router.get("/recipes/:id", RecipeControllers.read);
router.post("/recipes", RecipeControllers.add);
router.put("/recipes/:id", RecipeControllers.edit);
router.delete("/recipes/:id", RecipeControllers.destroy);

module.exports = router;

// router.get("/items", itemControllers.browse);
// router.get("/items/:id", itemControllers.read);
// router.put("/items/:id", itemControllers.edit);
// router.post("/items", itemControllers.add);
// router.delete("/items/:id", itemControllers.destroy);
