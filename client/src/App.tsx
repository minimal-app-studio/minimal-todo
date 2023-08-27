import React, { useContext, useState } from 'react';
import './App.css';
import AuthenticatedUserContext from './contexts/user-context';
import Signin from './pages/Signin/Signin';
import { AuthenticatedUser } from './types/User';
import { Navigate, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/SingUp';

const Home = () => {
    return <h1> Home </h1>;
};

type ProtectedRouteProps = { component: React.ReactNode };

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ component }) => {
    const authenticatedUser = useContext(AuthenticatedUserContext);
    if (!authenticatedUser) {
        return <Navigate to="/signin" />;
    }
    return component;
};

function App() {
    const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser | null>(null);

    return (
        <AuthenticatedUserContext.Provider value={authenticatedUser}>
            <Routes>
                <Route path="/signin" element={<Signin setAuthenticatedUser={setAuthenticatedUser} />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/" element={<ProtectedRoute component={<Home />}></ProtectedRoute>} />
            </Routes>
        </AuthenticatedUserContext.Provider>
    );
}

export default App;
