import mongoose from "mongoose";

const TextSchema = new mongoose.Schema({
  title: {
    type: String,
    required: "Title is required"
  },
  description: String,
  view: {
    type: Number,
    default: 0
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  author: {
    type: String,
    required: "Author is required"
  },
  genre: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Genre"
  }
});

const model = mongoose.model("Text", TextSchema);
export default model;
