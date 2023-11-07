const { movie } = require("../models/movie.schema");
const createMov = async (req, res) => {
  try {
    const data = await movie.create(req.body);
    res.status(201).send(data);
  } catch (error) {
    console.log(error.message);
  }
};

const deleteMovie = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await movie.findByIdAndDelete(id);
    res.send({ message: "Movie deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

const movieUpdate = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await movie.findByIdAndUpdate(id, req.body);
    const updatedMovie = await movie.findById(id);
    res.status(200).send(updatedMovie);
  } catch (error) {
    console.log(error.message);
  }
};

const movieFilter = async (req, res) => {
  try {
    const findMovie = await movie.find(req.query);
    res.send(findMovie);
  } catch (error) {
    console.log(error.message);
  }
};

const movieComment = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const movieFind = await movie.findById(id);
      movieFind.comments.push(req.body);
      await movieFind.save();
      res.send(movieFind);
    } else {
      res.send({ error: "movie not found" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

const movieRate = async (req, res) => {
  try {
    const { id } = req.params;
    if (id) {
      const data = await movie.findById(id);
      data.ratings.push({ value: req.body.rating });
      console.log(data);
      await data.save();
      res.send(data);
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  createMov,
  deleteMovie,
  movieUpdate,
  movieFilter,
  movieComment,
  movieRate,
};
