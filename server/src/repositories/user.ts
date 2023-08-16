import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { User } from '../types/user';
import peepal from 'peepal';
const logger = peepal.child({
    fileName: 'repository/user',
});

export default class UserRepository {
    db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    addUser = async (user: User) => {
        logger.debug({ user }, 'invoking add user');
        const userResponse: PrismaUser = await this.db.user.create({
            data: user,
        });
        logger.debug({ userResponse }, 'created user response');
        return userResponse;
    };
}
