import React from 'react';
import './SearchInput.css';
import lupa from '../assets/lupa.png';

function SearchInput({ value, onChange, onClick }) {
    return (
        <div className="align_input">
            <input
                type="text"
                placeholder="Digite o nome do usuário"
                value={value}
                onChange={onChange}
                className="search_input"
            />
            <button onClick={onClick} className="button_search">
                <img src={lupa} alt="Buscar" className="search-icon" />
            </button>
        </div>
    );
}

export default SearchInput;
