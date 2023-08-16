import UserRepository from '../repositories/user';
import { User } from '../types/user';
import peepal from 'peepal';
const logger = peepal.child({
    fileName: 'service/user',
});

export default class UserService {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    addUser = async (user: User) => {
        logger.debug({ user }, 'invoking add user');
        return await this.userRepository.addUser(user);
        // user notification
    };
}
