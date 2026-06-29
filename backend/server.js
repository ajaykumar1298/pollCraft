import app from "./src/app.js";
import http from "http";
import dotenv from "dotenv";
import db from "./src/db/db.js";

dotenv.config();

const server = http.createServer(app);
const PORT = process.env.PORT || 3000;

async function init() {
  try {
    await db();
    server.listen(PORT, () => {
      console.log("server is start now at PORT", PORT);
    });
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
}

init();
