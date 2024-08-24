import { Request, Response } from 'express';
import User from '../models/User';
import catcher from '../utils/catcher';

export const updateUser = catcher(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = await User.findByPk(id);
    if (user) {
      await user.update({ name, email, age });
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });