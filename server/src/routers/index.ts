import { Router } from 'express';
import { HttpUtils } from '../utils/http';
import UserRouter from './user';
const router = Router();

// healthcheck endpoints
router.get('/healthcheck', (req, res) => {
    HttpUtils.sendResponse(res, 'server is up and running');
});

router.use('/user', UserRouter);

export default router;
