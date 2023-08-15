import express from 'express';
import router from './routers';
const app = express();
const port = 3000;

app.use("/", router);

app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
