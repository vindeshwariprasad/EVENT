// app.js
import express from 'express';
import {dbConnection} from './database/databaseconeection.js';
import dotenv from "dotenv";
import messagerouter from "./router/messagerouter.js";
import cors from "cors";
const app = express();
dotenv.config({ path: "./config/config.env" });
app.use(
    cors({
      origin: [process.env.FRONT_URL],
      methods: ["POST"],
      credentials: true,
    })
  );

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/api/v1/message", messagerouter);
dbConnection();
export default app;

// jm0qf6wsNxQ1cbZF

// vinayguptasia233
