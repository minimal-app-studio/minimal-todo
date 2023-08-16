import { Router } from 'express';
import { HttpUtils } from '../utils/http';
import { PrismaClient } from '@prisma/client';
import UserRepository from '../repositories/user';
import UserService from '../services/user';
import UserController from '../controllers/user/user';
const router = Router();

import peepal  from 'peepal';
const logger = peepal.child({
    fileName: "router/index.js"
});

function createRouter(database: PrismaClient) {
    // healthcheck endpoints
    router.get('/healthcheck', (req, res) => {
        logger.debug("invoking /healthcheck");
        HttpUtils.sendResponse(res, 'server is up and running');
    });

    // User Routes - dependency injection
    const userRepository: UserRepository = new UserRepository(database);
    const userService: UserService = new UserService(userRepository);
    const userController: UserController = new UserController(userService);
    router.post('/user', userController.addUser);

    return router;
}

export default createRouter;
