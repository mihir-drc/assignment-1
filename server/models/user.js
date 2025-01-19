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
  isActive: Number, // 0- Pending ,1 - Approved , 2- Rejected
});
export const userModel = mongoose.model("users", userSchema);
