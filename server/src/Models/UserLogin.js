import { Schema, model } from "mongoose";

const UserLoginSchema = new Schema(
  {
    userid: {
      type: String,
      required: true,
    },
    loginpass: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } 
);

const UserLoginModel = model("LoginUser", UserLoginSchema);

export default UserLoginModel;
