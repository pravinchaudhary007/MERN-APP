import UserModle from "../Models/UserModel.js";

export const UserRegister = async (req, res) => {
  try {
    const { username, email, password, cmfmpass } = req.body;

    if (!username || !email || !password || !cmfmpass) {
      return res.status(400).send("Please fill All Filed...?");
    }

    if (username.length < 5) {
      return res.status(400).send("Please username at list 5 charaters ?... ");
    }
    if (password.length < 4 || cmfmpass.length < 4) {
      return res
        .status(400)
        .send("Please password at list 4 charaters or number ?... ");
    }
    const existuser = await UserModle.findOne({$or : [{username} , {email}]});
    
     if (existuser) {
      return res.status(400).send(`${existuser.username === username ? username : email} to already Account registered.`);
    }
    if (password !== cmfmpass) {
      return res.status(400).send("Password and confirm password do not match.");
    }

    await UserModle({ username, email, password }).save();
    res.status(200).send(` ${username} is register Successfully... ✨🎉`);
  } catch (error) {
    res.status(500).send(error.message);
  }
}; // Add User Register

export const DeleteUser = async (req, res) => {
  const { username, email } = req.body;
  try {
    if (!username && !email) {
      return res.status(400).send("Please enter username or email ?...");
    }
    const remove = await UserModle.deleteOne({
      $or: [{ username }, { email }],
    });

    if (remove.deletedCount === 1) {
      return res
        .status(200)
        .send(`${username || email} Delete Successfully... !`);
    }
    return res.status(404).send("User not Found ?...");
  } catch (error) {
    res.status(500).send(error.message);
  }
}; // Delete User


