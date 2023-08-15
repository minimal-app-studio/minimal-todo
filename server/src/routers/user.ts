import { Router } from 'express';
import { PrismaClient } from '@prisma/client';
import UserService from '../services/user';
import UserRepository from '../repositories/user';
import UserController from '../controllers/user';

const UserRouter = Router();
const prisma = new PrismaClient();

const userRepository: UserRepository = new UserRepository(prisma);
const userService: UserService = new UserService(userRepository);
const userController: UserController = new UserController(userService);

UserRouter.get('/user', userController.addUser);

export default UserRouter;
