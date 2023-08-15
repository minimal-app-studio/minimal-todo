import UserRepository from '../repositories/user';
import { User } from '../types/user';

export default class UserService {
    userRepository: UserRepository;

    constructor(userRepository: UserRepository) {
        this.userRepository = userRepository;
    }

    addUser = async (user: User) => {
        return await this.userRepository.addUser(user);
    };
}
