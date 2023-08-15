import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { User } from '../types/user';

export default class UserRepository {
    db: PrismaClient;

    constructor(db: PrismaClient) {
        this.db = db;
    }

    addUser = async (user: User) => {
        const userResponse: PrismaUser = await this.db.user.create({
            data: {
                ...user,
            },
        });
        return userResponse;
    };
}
