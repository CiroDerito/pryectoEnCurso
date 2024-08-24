import { Request, Response } from 'express';
import User from '../models/User';
import catcher from '../utils/catcher';

export const getUsers = catcher(async (req: Request, res: Response): Promise<void> => {
  const users = await User.findAll();
  res.status(200).json(users);
});

export const getUserById = catcher(async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const user = await User.findByPk(id);
  if (user) {
    res.status(200).json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});
  