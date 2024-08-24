import { Request, Response } from 'express';
import User from '../models/User';
import catcher from '../utils/catcher';

export const createUser = catcher(async (req: Request, res: Response): Promise<void> => {
    const { name, email, age } = req.body;
    const user = await User.create({ name, email, age });
    res.status(201).json(user);
  });