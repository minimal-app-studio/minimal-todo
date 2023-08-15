import Joi from 'joi';
import { User } from '../types/user';

const UserSchema = Joi.object({
    username: Joi.string()
        .max(16)
        .regex(/^[a-z0-9]+$/, 'username should be a-z and 0-9')
        .messages({
            'string.max': 'Username cannot exceed {{#limit}} characters',
            'string.pattern.base': 'Username should be composed of lowercase letters and digits only',
        }),
    email: Joi.string().max(32).messages({
        'string.max': 'Email cannot exceed {{#limit}} characters',
    }),
    active: Joi.boolean().default(false),
    password: Joi.string()
        .min(8)
        .max(16)
        .regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/)
        .messages({
            'string.min': 'Password must be at least {{#limit}} characters long',
            'string.max': 'Password cannot be longer than {{#limit}} characters',
            'string.pattern.base': 'Password must include at least one lowercase, one uppercase, one digit, and one special character',
        }),
});

export default class UserController {
    userService: any;

    constructor(userService: any) {
        this.userService = userService;
    }

    addUser = async (user: User) => {
        // validate the payload
        const { error } = UserSchema.validate(user);
        if (error) throw new Error(error.details[0].message);

        // process further with the service
        return await this.userService.addUser(user);
    };
}
