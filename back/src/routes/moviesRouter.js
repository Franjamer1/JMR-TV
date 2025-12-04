const { Router } = require("express");
const moviesController = require("../controllers/moviesController");

const movieRouter = Router();

movieRouter.get("/", moviesController.getAllMovies);
movieRouter.post("/", moviesController.createMovie);

module.exports = movieRouter;