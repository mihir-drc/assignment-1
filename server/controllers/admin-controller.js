const md5 = require("md5");
const { userModel } = require("../models/user");
const jwt = require("jsonwebtoken");

async function userData(req, res, next) {
  if (!req.headers.authorization) {
    res.status(405).json({ success: false, message: "Missing Token" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    const user = jwt.verify(token, process.env.JWT_SECRET);
    const users = await userModel.find(
      { role: { $ne: "admin" }, isActive: 1 },
      { password: 0 }
    );
    const pendingUsers = await userModel.find({ isActive: 2 }, { password: 0 });
    res.status(200).json({ users, pendingUsers });
  } catch (error) {
    console.log(error);

    res.status(405).json({ success: "false", message: "Unauthorized Access" });

    return;
  }
}
async function addUser(req, res, next) {
  if (!req.headers.authorization) {
    res.status(405).json({ success: false, message: "Missing Token" });
  }
  const token = req.headers.authorization.split(" ")[1];
  try {
    console.log(req.body);
    const { password, role, email, name } = req.body;
    const user = new userModel({
      password: md5(password),
      role,
      email,
      name,
      isActive: 1,
    });

    await user.save();
    res.status(200).json({
      success: true,
      message:
        role.charAt(0).toUpperCase() + role.slice(1) + " Created Successfully",
    });
  } catch (error) {
    console.log(error);

    res.status(405).json({ success: "false", message: "Unauthorized Access" });
  }
}
async function approveUser(req, res, next) {
  const user = await userModel.findOne({ _id: req.query.id });
  user.isActive = 1;
  await user.save();
  res.status(200).json({ success: true, message: "Approved" });
}
module.exports = {
  userData,
  addUser,
  approveUser,
};
