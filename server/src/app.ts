import initApp from './express';
import router from './routers';
import { PrismaClient } from '@prisma/client';
const database = new PrismaClient();

const port = 3000;
Promise.resolve(initApp(database)).then((app) => {
    app.listen(port, () => {
        return console.log(`Express is listening at http://localhost:${port}`);
    });
});
