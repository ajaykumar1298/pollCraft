import mongoose from "mongoose";

async function db() {
  let uri = process.env.MONGO_URI;
  if (!uri) {
    throw new Error("uri is not found");
  }
  await mongoose.connect(uri);
  console.log("db is now connected");
}

export default db;
