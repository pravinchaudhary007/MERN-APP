import express, { json, urlencoded } from "express";
import cors from "cors"

const app = express();

app.use(json(), urlencoded({ extended: true }),cors());

export default app;
