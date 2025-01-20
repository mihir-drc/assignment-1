require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const adminRoutes = require("./routes/admin-routes");
const { userModel } = require("./models/user");
const jwt = require("jsonwebtoken");

const cors = require("cors");
const md5 = require("md5");
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

mongoose.connect(process.env.MONGODB_URI);

app.post("/register", async (req, res) => {
  const { password, role, email, name } = req.body;
  const user = new userModel({ password: md5(password), role, email, name });
  if (role == "user") {
    user.isActive = 1;
  } else if (role == "manager") {
    user.isActive = 2;
  }
  await user.save();
  console.log("User Created");
});

app.post("/login", async (req, res) => {
  const user = await userModel.findOne({
    email: req.body.email,
    password: md5(req.body.password),
    role: req.body.role,
    isActive: 1,
  });
  if (user) {
    const token = jwt.sign(
      { _id: user._id, role: user.role, email: user.email },
      process.env.JWT_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({ name: user.name, token, success: true });
  } else {
    res.status(400).json({ success: false });
  }
});
app.use("/admin", adminRoutes);
app.listen(3001, () => {
  console.log("server");
});
