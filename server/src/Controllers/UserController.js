import UserRegisterModel from "../Models/UserRegister.js";
import UserLoginModel from "../Models/UserLogin.js";
import bcrypt from "bcrypt";

export const UserRegister = async (req, res) => {
  try {
    const { username, phonenumber, email, password, cmfmpass } = req.body;

    if (username.length < 5) {
      return res.status(400).send("Username must be at least 5 characters.");
    }

    if (phonenumber.length !== 10) {
      return res.status(400).send("Phone number must be exactly 10 digits.");
    }

    if (email.length == 0) {
      return res.status(400).send("Please enter email.");
    }

    if (password.length === 0 || cmfmpass.length === 0) {
      return res.status(400).send("Please enter password.");
    }

    if (password.length < 4 || cmfmpass.length < 4) {
      return res.status(400).send("Password must be at least 4 characters.");
    }

    if (password !== cmfmpass) {
      return res.status(400).send("Password and confirm password do not match.");
    }

    const cleanPhonenumber = phonenumber.replace(/\D/g, "").trim();
    const existuser = await UserRegisterModel.findOne({
      $or: [{ username }, { phonenumber: cleanPhonenumber }, { email }],
    });

    if (existuser) {
      if (existuser.username === username) {
        return res.status(400).send(`${username} is already registered.`);
      } else if (String(existuser.phonenumber) === cleanPhonenumber) {
        return res.status(400).send(`${phonenumber} is already registered.`);
      } else if (existuser.email === email) {
        return res.status(400).send(`${email} is already registered.`);
      }
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    await UserRegisterModel.create({
      username,
      phonenumber,
      email,
      password: hashedPassword,
    });

    res.status(200).send(`${username} is registered successfully 🎉`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};  //  User Register
export const UserLogin = async (req, res) => {
  const { userid, loginpass } = req.body;
  try {
    if (!userid || !loginpass) {
      return res.status(400).send("Please enter both username/email/phone and password.");
    }
    let cleanUserid = userid;
    if (/^\d+$/.test(userid)) {  
      cleanUserid = userid.replace(/\D/g, '').trim();
    }

    const user = await UserRegisterModel.findOne({
      $or: [
        { username: cleanUserid },
        { email: cleanUserid },
        { phonenumber: cleanUserid },
      ],
    });

    if (!user) {
      return res.status(400).send(`${userid} is not registered.`);
    }

    const isPasswordMatch = await bcrypt.compare(loginpass, user.password);
    if (!isPasswordMatch) {
      return res.status(400).send("Incorrect password.");
    }

    const hashedloginpass = await bcrypt.hash(loginpass, 10);
    await UserLoginModel.create({
      userid: user.username, 
      loginpass: hashedloginpass,
    });

    // Success response
    res.status(200).send(`${user.username} logged in successfully 🎉`);
  } catch (error) {
    res.status(500).send(error.message);
  }
};  //  User Login


export const DeleteUser = async (req, res) => {
  const { username, phonenumber, email } = req.body;

  try {
    if (!username && !email && !phonenumber) {
      return res.status(400).send("Please provide username, email, or phone number.");
    }

    const remove = await UserRegisterModel.deleteOne({
      $or: [{ username }, { email }, { phonenumber }],
    });

    if (remove.deletedCount === 1) {
      return res.status(200).send(`${username || email || phonenumber} deleted successfully!`);
    }

    return res.status(404).send("User not found.");
  } catch (error) {
    res.status(500).send(error.message);
  }
};   // User Delete
