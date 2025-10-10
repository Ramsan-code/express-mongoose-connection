import User from "../models/users.js";

export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

export const getUsersID = async (req, res) => {
  const UsersID = req.params.id;
  const user = await user.findById(UsersID);
  res.json(user);
};

export const createUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
