import { Router } from "express";
import { UserRegister ,DeleteUser, UserLogin} from "../Controllers/UserController.js";

const UserRouter = Router();

UserRouter.route('/register').post(UserRegister)
UserRouter.route('/login').post(UserLogin)
UserRouter.route('/delete').post(DeleteUser)

export default UserRouter
