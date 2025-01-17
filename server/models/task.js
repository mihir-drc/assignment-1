import mongoose, { Schema } from "mongoose";
const taskSchema = new mongoose.Schema({
  title: String,
  description: String,
  assigner: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  assignee: [
    {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  ],
  role: {
    type: String,
    enum: ["USER", "MANAGER", "ADMIN"],
    default: "USER",
  },
  priority: {
    type: String,
    enum: ["Low", "Medium", "High"],
  },
  orderNumber: String,
  dueDate: {
    type: Date,
  },
  progress: Number,
});
export const taskModel = mongoose.model("tasks", taskSchema);
