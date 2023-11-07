const signUpMidd = (req, res, next) => {
  const { username, password, email } = req.body;
  if (username && password && email) {
    next();
  } else {
    return res.status(400).send("all fields are required");
  }
};

module.exports = { signUpMidd };
