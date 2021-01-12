import express from 'express';
import User from '../models/userModel.js';
import data from '../data.js';
import expressAsyncHandler from 'express-async-handler';

const userRouter = express.Router();

userRouter.get('/seed', expressAsyncHandler(async(req, res) => {
  //remove all Users and create users with new id
  await User.remove({});
  const createdUsers = await User.insertMany(data.users);
  res.send({ createdUsers })
}));

export default userRouter;