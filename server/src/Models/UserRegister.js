import { Schema, model } from "mongoose";

const UserRegisterSchema = Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    phonenumber: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,     // bcreypt hash form in encoded
      required: true,
      unique: true,
    }
  },
  { timestamps: true }
);

const UserRegisterModle = model("RegisterUser", UserRegisterSchema);

export default UserRegisterModle;
