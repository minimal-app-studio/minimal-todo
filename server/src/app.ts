import initApp from './express';
import peepal from 'peepal';
import { PrismaClient } from '@prisma/client';

const logger = peepal.child({
    fileName: 'app',
});

const database = new PrismaClient();

const port = 3000;
Promise.resolve(initApp(database)).then((app) => {
    app.listen(port, () => {
        logger.info(`Express is listening at http://localhost:${port}`);
    });
});
