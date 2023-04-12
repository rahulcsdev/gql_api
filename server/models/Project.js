import mongoose from "mongoose";

const projectSchema = new mongoose.Schema({
  name: String,
  description: String,
  status: {
    type: String,
    enum: ["Not Started", "In Progress", "Completed"],
  },
  clientId: {
    type: mongoose.Types.ObjectId,
    ref: "Client",
  },
});

export default mongoose.model("Project", projectSchema);
