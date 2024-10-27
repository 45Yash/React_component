// App.js
import React, { useContext } from 'react';
import ContextProvider, { AppContext } from './ContextProvider';
import './App.css';

const Home = () => {
    const { state, updateUser } = useContext(AppContext);

    return (
        <div>
            <h1>Welcome, {state.user}</h1>
            {!state.isLoggedIn && (
                <button onClick={() => updateUser('Yash Mehta')}>Login</button>
            )}
        </div>
    );
};

const App = () => (
    <ContextProvider>
        <Home />
    </ContextProvider>
);

export default App;
