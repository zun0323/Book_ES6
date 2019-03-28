import "./db";
import dotenv from "dotenv";
import app from "./app";
import "./models/Text";
import "./models/Genre";

dotenv.config();

const { PORT } = process.env;

const handleListening = () => {
  console.log(`✅  Listening on : http://localhost:${PORT}`);
};

app.listen(PORT, handleListening);
