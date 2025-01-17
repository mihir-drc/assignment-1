import mongoose from "mongoose";
const projectSchema = new mongoose.Schema({
  title: String,
  Description: String,
  manager: {
    type: Schema.Types.ObjectId,
    ref: "user",
  },
  members: [{ type: Schema.Types.ObjectId, ref: "user" }],
});
export const projectModel = mongoose.model("projects", projectSchema);
