import mongoose from "mongoose";

const GenreSchema = new mongoose.Schema({
  genreName: {
    type: String,
    require: "Genre is required"
  }
});

const model = mongoose.model("Genre", GenreSchema);
export default model;
