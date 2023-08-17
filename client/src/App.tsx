import { useState } from 'react';
import './App.css';
import AuthenticatedUserContext from './contexts/user-context';
import Login from './pages/Login/Login';
import { AuthenticatedUser } from './types/User';

const Home = () => {
    return <h1> Home </h1>;
};

function App() {
    const [authenticatedUser, setAuthenticatedUser] = useState<AuthenticatedUser | null>(null);
    return (
        <AuthenticatedUserContext.Provider value={authenticatedUser}>
            {authenticatedUser ? <Home /> : <Login setAuthenticatedUser={setAuthenticatedUser} />}
        </AuthenticatedUserContext.Provider>
    );
}

export default App;
