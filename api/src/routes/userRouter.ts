import { Router } from "express";
import { deleteUser } from "../controllers/deleteUserController";
import { createUser } from "../controllers/postUserController";
import { getUserById, getUsers} from "../controllers/getUsersController";
import { updateUser } from "../controllers/putUserController";

const userRouter:Router = Router();

userRouter.post('/', createUser);
userRouter.get('/', getUsers);
userRouter.get('/:id', getUserById);
userRouter.put('/:id', updateUser);
userRouter.delete('/:id', deleteUser);


export default userRouter