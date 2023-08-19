import { useEffect, useState } from 'react';
import './App.css';
import AuthenticatedUserContext from './contexts/user-context';
import Signin from './pages/Signin/Signin';
import { AuthenticatedUser } from './types/User';
import { Route, Routes, useNavigate } from 'react-router-dom';
import SignUp from './pages/SignUp/SingUp';

const Home = () => {
    return <h1> Home </h1>;
};

function App() {
    const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser | null>(null);
    const navigate = useNavigate();

    // If user is not authenticated, redirect to the Signin page
    useEffect(() => {
        if (!authenticatedUser) {
            navigate('/signin');
        } else {
            navigate('/');
        }
    }, [authenticatedUser, navigate]);

    return (
        <AuthenticatedUserContext.Provider value={authenticatedUser}>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<Signin setAuthenticatedUser={setAuthenticatedUser} />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </AuthenticatedUserContext.Provider>
    );
}

export default App;
