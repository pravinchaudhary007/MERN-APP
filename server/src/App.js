import express, { json, urlencoded } from "express";

const app = express();

app.use(json(), urlencoded({ extended: true }));

export default app;
