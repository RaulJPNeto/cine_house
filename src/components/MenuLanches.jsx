import React from 'react';

function MenuLanches({ selectedMovie, onLancheClick, onBack }) {
    const lanches = [
        { name: 'Pizza', icon: '🍕', descricao: 'Vamos Pedir Pizza' },
        { name: 'Pipoca', icon: '🍿', descricao: 'Vamos Fazer Pipoca' },
        { name: 'Sanduíche', icon: '🥪', descricao: 'Vamos Pedir Sanduiche' },
        { name: 'Pastel', icon: '🥟', descricao: 'Vamos Pedir Pastel' },
    ];

    return (
        <div className="menu-lanches">
            <h3>Escolha um lanche para acompanhar {selectedMovie.title}</h3>
            <img src={selectedMovie.cover} alt={selectedMovie.title} className="movie-image"/>
            <div className="lanches-list">
                {lanches.map((lanche) => (
                    <div
                        key={lanche.name}
                        className="lanche-item"
                        onClick={() => onLancheClick(lanche)}
                    >
                        <span className="lanche-icon">{lanche.icon}</span>
                        <span className="lanche-name">{lanche.name}</span>
                    </div>
                ))}
            </div>
            <button onClick={onBack}>Voltar</button>
        </div>
    );
}

export default MenuLanches;