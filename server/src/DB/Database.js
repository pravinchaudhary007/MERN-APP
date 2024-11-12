import { connect } from "mongoose";
import { DB_NAME } from "./../Constansts.js";

const Database = async (URI) => {
  try {
    const DB = await connect(`${URI}/${DB_NAME}`);
    console.log(`📂  Database Connected... At Host : ${DB.connection.host}`);
  } catch (error) {
    console.log("Database Connection Error :", error.message);
    process.exit(1);
  }
};

export default Database;
