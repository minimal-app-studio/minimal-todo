import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/Input';
import LinkButton from '../../components/Button';

const UserSchema = Yup.object().shape({
    username: Yup.string()
        .max(16, 'Username cannot exceed ${max} characters')
        .matches(/^[a-z0-9]+$/, 'Username should be composed of lowercase letters and digits only'),
    email: Yup.string().max(32, 'Email cannot exceed ${max} characters'),
    active: Yup.boolean().default(false),
    password: Yup.string()
        .min(6, 'Password must be at least ${min} characters long')
        .max(16, 'Password cannot be longer than ${max} characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must include at least one lowercase, one uppercase, one digit, and one special character'
        ),
});

const SignUp: React.FC = () => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
            email: '',
        },
        validationSchema: UserSchema,
        onSubmit: (values) => {
            console.log({
                username: values.username,
                email: values.username,
            });
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    label="Username"
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username}
                />
                <Input
                    label="Email"
                    type="text"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    error={formik.errors.email}
                />
                <Input
                    label="Password"
                    type="text"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    error={formik.errors.password}
                />
                <button type="submit">Login</button>
            </form>
            <div>
                Already a user? <LinkButton link="/signin">sign in</LinkButton> here.
            </div>
        </div>
    );
};

export default SignUp;
