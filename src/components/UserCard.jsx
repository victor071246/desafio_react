import React, { useState } from 'react';
import './UserCard.css';

function UserCard({ user }) {
    const [imageLoaded, setImageLoaded] = useState(false);

    if (!user) return null;
    const handleImageLoad = () => {
        setImageLoaded(true);
    };
    return (
        <div className="card">
            <img
                src={user.avatar_url}
                alt="Avatar"
                className={`userImage ${imageLoaded ? 'loaded' : ''}`}
                onLoad={handleImageLoad}
            />
            <div className="content">
                <h1 className="name">{user.name || ''}</h1>
                <p className="biografy">{user.bio || ''}</p>
            </div>
        </div>
    );
}

export default UserCard;
