import app from "./App.js";
import dotenv from "dotenv";
import Database from "./DB/Database.js";
import UserRouter from "./Routes/UserRouter.js";

dotenv.config();

const env = process.env;
const Port = env.PORT;
const URI = env.URI;

app.use("/", UserRouter);

const Server = async (URI) => {
  try {
    await Database(URI);
    app.listen(Port, () => {
      console.log(`📡  Server is Running.... At Port : ${Port}`);
      console.log("📺  http://localhost:5000/register");
    });
  } catch (error) {
    console.log("Server/DB Connection Error...: ", error);
    process.exit(1);
  }
};

if (URI && Port) {
  Server(URI);
} else {
  console.log("Environment variable in not Define URI && Port ?");
}
