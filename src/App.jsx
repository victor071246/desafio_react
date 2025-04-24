import React, { useState } from 'react';
import Background from './components/Background';

function App() {
    const [username, setUsername] = useState('');
    const [userData, setUserData] = useState(null);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSearch = async () => {
        setLoading(true);
        try {
            const response = await fetch(
                `https://api.github.com/users/${username}`
            );

            if (!response.ok) {
                throw new Error('Usuário não encontrado');
            }
            const data = await response.json();
            setUserData(data);
            setLoading(false);
            setError('');
        } catch (err) {
            setUserData(null);
            setError(err.message);
            setLoading(false);
        }
    };

    return (
        <>
            <Background
                username={username}
                setUsername={setUsername}
                handleSearch={handleSearch}
                error={error}
                userData={userData}
                loading={loading}
            />
        </>
    );
}

export default App;
