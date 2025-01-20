const express = require("express");
const router = express.Router();
const {
  userData,
  addUser,
  approveUser,
} = require("../controllers/admin-controller");
router.get("/userData", userData);
router.post("/addUser", addUser);
router.get("/approveUser", approveUser);
module.exports = router;
