import User from "../models/users.js";
export const getUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// export const getUsersID = async (req, res) => {
//   // const getUsersID = req.params.id;
//   const user = await user.findByIdAndDelete(req.params.id);
//   res.json(user);
// };
