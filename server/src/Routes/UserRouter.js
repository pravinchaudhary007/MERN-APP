import { Router } from "express";
import { UserRegister ,DeleteUser} from "../Controllers/UserController.js";

const UserRouter = Router();

UserRouter.route('/register').post(UserRegister)
UserRouter.route('/delete').post(DeleteUser)

export default UserRouter
