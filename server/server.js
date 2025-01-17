require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const { userModel } = require("./models/user");
const cors = require("cors");
const md5 = require("md5");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(
  "mongodb+srv://mihir_drc:mihir%40123456@cluster0.kjah9.mongodb.net/taskBoard"
);

app.post("/register", async (req, res) => {
  const { password, role, email, name } = req.body;
  const user = new userModel({ password: md5(password), role, email, name });
  await user.save();
  console.log("User Created");
});

app.post("/login", async (req, res) => {
  const response = await userModel.find({
    email: req.body.email,
    password: md5(req.body.password),
  });
  if (response.length) {
    res.json("Login");
  }
  res.json("fail");
});
app.listen(3001, () => {
  console.log("server");
  userModel.find({}).then((user) => {
    console.log(user);
  });
});
