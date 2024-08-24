import { Request, Response } from 'express';
import User from '../models/User';
import catcher from '../utils/catcher';

export const deleteUser = catcher(async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await User.findByPk(id);
    if (user) {
      await user.destroy();
      res.status(200).json({ message: 'Usuario eliminado correctamente' });
    } else {
      res.status(404).json({ message: 'Usuario no encontrado' });
    }
  });