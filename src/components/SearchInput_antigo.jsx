import React from 'react';
import './SearchInput.css';

function SearchInputD({ value, onChange, onClick }) {
    return (
        <div className="align_input">
            <input
                type="text"
                placeholder="Digite o nome do usuário"
                value={value}
                onChange={onChange}
                className="search_input"
            />
            <br />
            <button onClick={onClick} className="button_search"></button>
        </div>
    );
}

export default SearchInputD;
