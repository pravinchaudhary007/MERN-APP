import { Router } from "express";
import { UserRegister ,RegUserDelete,
         UserLogin,RegisterdUser,LoginUser,
         LogUserDelete,UserUpadate} from "../Controllers/UserController.js";

const UserRouter = Router();

UserRouter.route('/register').post(UserRegister)
UserRouter.route('/login').post(UserLogin)
UserRouter.route('/reguserdelete').post(RegUserDelete)
UserRouter.route('/loguserdelete').post(LogUserDelete)
UserRouter.route('/allregistreduser').get(RegisterdUser)
UserRouter.route('/allloginuser').get(LoginUser)
UserRouter.route('/UpadateUser').put(UserUpadate)

export default UserRouter
