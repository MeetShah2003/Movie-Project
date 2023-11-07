const express = require("express");
const { connection } = require("./config/db");
const { userRoute } = require("./routes/user.routes");
const { movieRoute } = require("./Routes/movie.routes");
const app = express();
app.use(express.json());
app.use(userRoute);
app.use(movieRoute);

app.listen(8090, () => {
  console.log("Server is running on Port 8090");
  connection();
});
