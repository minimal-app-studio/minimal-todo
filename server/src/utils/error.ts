import { HttpUtils } from './http';

export class ValidationError extends Error {
    name: string;
    code: number | string;
    constructor(message: string, code: number | string = 0) {
        super(message);
        this.name = 'ValidationError';
        this.code = code;
    }
}

export const globalErrorHandler = (err, req, res, next) => {
    HttpUtils.sendError(res, 400, err.code, err.message);
};
