const { Router } = require("express");
const movieRoute = Router();

const {
  createMov,
  deleteMovie,
  movieUpdate,
  movieFilter,
  movieComment,
  movieRate,
} = require("../controller/movie.controller");

// movie Routes
movieRoute.post("/movie/create", createMov);
movieRoute.delete("/movie/delete/:id", deleteMovie);
movieRoute.patch("/movie/update/:id", movieUpdate);
movieRoute.get("/movie/filter", movieFilter);
movieRoute.patch("/movie/comment/:id", movieComment);
movieRoute.patch("/movie/rating/:id", movieRate);

module.exports = { movieRoute };
