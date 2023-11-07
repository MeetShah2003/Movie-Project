const { Router } = require("express");
const {
  welcome,
  signUp,
  dltUser,
  allUser,
  userLogin,
} = require("../controller/user.controller");
const { signUpMidd } = require("../middleware/user.middleware");
const userRoute = Router();

// user Routes

userRoute.get("/", welcome);
userRoute.post("/user/signup", signUpMidd, signUp);
userRoute.post("/user/login", userLogin);
userRoute.delete("/user/delete/:id", dltUser);
userRoute.get("/user/", allUser);

module.exports = { userRoute };
