import { createContext } from 'react';
import { AuthenticatedUser } from '../types/User';

type AuthenticatedUserContext = AuthenticatedUser | null;

const AuthenticatedUserContext = createContext<AuthenticatedUserContext>(null);

export default AuthenticatedUserContext;
