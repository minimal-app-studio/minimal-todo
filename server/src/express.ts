import { PrismaClient } from '@prisma/client';
import express, { Router } from 'express';
import createRouter from './routers';
import { globalErrorHandler } from './utils/error';

function initApp(database: PrismaClient) {
    const app = express();
    const rootRouter = createRouter(database);
    app.use(express.json());
    app.use((req, res, next) => {
        next();
    });
    app.use('/', rootRouter);
    app.use(globalErrorHandler);
    return app;
}

export default initApp;
