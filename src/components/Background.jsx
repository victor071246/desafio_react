import React from 'react';
import './Background.css';
import SearchInput from './SearchInput'; // Certifique-se de usar a versão correta do SearchInput
import ErrorMessage from './ErrorMessage';
import UserCard from './UserCard';
import Loader from './Loader';

function Background({
    username,
    setUsername,
    handleSearch,
    error,
    userData,
    loading,
}) {
    return (
        <div className="animated-background">
            <div className="grid"></div>
            <div className="orb orb-left"></div>
            <div className="orb orb-right"></div>
            <div className="background-container">
                <div className="logo"></div>
                <div className="backgroundCard"></div>
                {/* Exibir o Loader enquanto está carregando */}
                {loading ? (
                    <Loader /> // Exibe o loader se estiver carregando
                ) : (
                    <>
                        {/* Passando as props corretamente */}
                        <SearchInput
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            onClick={handleSearch}
                        />
                        <UserCard user={userData} />
                        <ErrorMessage message={error} />
                    </>
                )}
            </div>
        </div>
    );
}

export default Background;
