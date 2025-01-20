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
  isActive: Number, // 0- Deleted ,1 - Approved , 2- Pending , 3- Rejected
});
export const userModel = mongoose.model("users", userSchema);
