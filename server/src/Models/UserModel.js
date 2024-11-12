import { Schema, model } from "mongoose";

const UserSchema = Schema(
  {
    username: {
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
    },
    cmfmpassword: {
      type: String,
    },
  },
  { timestamps: true }
);

const UserModle = model("User", UserSchema);

export default UserModle;
