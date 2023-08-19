import React from 'react';
import { AuthenticatedUser } from '../../types/User';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Input } from '../../components/Input';
import LinkButton from '../../components/Button';

type SetUserFunction = React.Dispatch<React.SetStateAction<AuthenticatedUser | null>>;

const UserSchema = Yup.object().shape({
    username: Yup.string()
        .max(16, 'Username cannot exceed ${max} characters')
        .matches(/^[a-z0-9]+$/, 'Username should be composed of lowercase letters and digits only'),
    active: Yup.boolean().default(false),
    password: Yup.string()
        .min(6, 'Password must be at least ${min} characters long')
        .max(16, 'Password cannot be longer than ${max} characters')
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
            'Password must include at least one lowercase, one uppercase, one digit, and one special character'
        ),
});

const Signin: React.FC<{ setAuthenticatedUser: SetUserFunction }> = ({ setAuthenticatedUser }) => {
    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: UserSchema,
        onSubmit: (values) => {
            setAuthenticatedUser({
                username: values.username,
                email: values.username,
            });
        },
    });

    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <Input
                    label="Email / Username"
                    type="text"
                    name="username"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    error={formik.errors.username}
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
                First time here? <LinkButton link="/signup">sign up</LinkButton> and become a part of our growing family.
            </div>
        </div>
    );
};

export default Signin;
