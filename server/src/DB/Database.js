import { connect } from "mongoose";
import { DB_NAME } from "./../Constansts.js";


const Database = async (URI) => {
  try {
    const DB = await connect(`${URI}/${DB_NAME}`);
    console.log(
      `📂  Database Connected... Host    : ${DB.connection.host}
📝  Database Storage..... Name    : ${DB_NAME}`
    );
  } catch (error) {
    console.error("Database Connection Error:", error.message);
    process.exit(1);
  }
};

export default Database;
