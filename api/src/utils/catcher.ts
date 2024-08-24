import { Request, Response, NextFunction } from 'express';

type AsyncHandler = (req: Request, res: Response, next: NextFunction) => Promise<void>;

const catcher = (fn: AsyncHandler) => (req: Request, res: Response, next: NextFunction): Promise<void> => {
  return Promise.resolve(fn(req, res, next)).catch(next);
};

export default catcher;
