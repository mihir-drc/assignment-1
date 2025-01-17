import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: {
    type: String,
    enum: ["user", "manager", "admin"],
    default: "USER",
  },
});
export const userModel = mongoose.model("users", userSchema);
