import mongoose from "mongoose";

mongoose.connect(
  "mongodb+srv://thmsnsr:g9S68XeScGvyh..@cluster0.vkmf7.mongodb.net/alura-node?"
);

let db = mongoose.connection;

export default db;
