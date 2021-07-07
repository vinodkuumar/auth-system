const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json());

const authRoutes = require("./routes/auth");
const verifyToken = require("./routes/verifyToken");

app.get("/", (req, res) => {
  res.send("Welcome to the auth system");
});

app.get("/api/user/profile", verifyToken, (req, res) => {
  res.send({success: true, data: req.user});
});

app.use("/api/users", authRoutes);

mongoose
  .connect(
    "mongodb+srv://vinod_auth:JUZGQ2UtYBZRThnE@cluster0.zbddp.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => {
    app.listen(8080, () => console.log("Server is running"));
  })
  .catch((err) => {
    console.log(err);
  });
