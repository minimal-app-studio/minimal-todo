// import and configure logger as first thing
import { peepal, contextMiddleware } from 'peepal';
peepal({
    level: process.env.LOG_LEVEL || 'debug',
});

import express from 'express';
import { PrismaClient } from '@prisma/client';
import createRouter from './routers';
import { globalErrorHandler } from './utils/error';

function initApp(database: PrismaClient) {
    const app = express();
    app.use(contextMiddleware);
    const rootRouter = createRouter(database);
    app.use(express.json());
    app.use('/', rootRouter);
    app.use(globalErrorHandler);
    return app;
}

export default initApp;
