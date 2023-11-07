const { user } = require("../models/user.schema");

const welcome = (req, res) => {
  return res.status(200).send("Welcome to the movie API");
};

const signUp = async (req, res) => {
  try {
    const data = await user.findOne({ email: req.body.email });
    if (data) {
      return res.send("User Already Exist");
    } else {
      const newUser = await user.create(req.body);
      return res.status(201).send(newUser);
    }
  } catch (error) {
    console.log(error.message);
  }
};

const dltUser = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedUser = await user.findByIdAndDelete(id);
    res.send({ message: "User deleted successfully" });
  } catch (error) {
    console.log(error, message);
  }
};

const allUser = async (req, res) => {
  try {
    const currUser = await user.find();
    res.status(200).send(currUser);
  } catch (error) {
    console.log(error.message);
  }
};

const userLogin = async (req, res) => {
  try {
    const { username, password } = req.body;
    const data = await user.findOne({ username: username, password: password });
    if (data) {
      res.send({ message: "Logged in successfully" });
    } else {
      res.status(401).json({ error: "Invalid username or password" });
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = {
  welcome,
  signUp,
  dltUser,
  allUser,
  userLogin,
};
