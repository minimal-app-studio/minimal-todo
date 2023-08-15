import { Response } from 'express';

export class HttpUtils {
    static sendResponse(res: Response, data: unknown) {
        return res.status(200).json({
            status: 'success',
            data,
        });
    }

    static sendError(res: Response, httpCode = 400, errorCode = 0, message = 'something went wrong') {
        return res.status(httpCode).json({
            status: 'error',
            message,
            code: errorCode,
        });
    }
}
