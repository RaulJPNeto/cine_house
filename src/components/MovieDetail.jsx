import React from 'react';

const MovieDetail = ({ movie, onSelect, onBack }) => {
    return (
        <div className='movie-detail'>
            <img src={movie.cover} alt={movie.title} className="movie-image" />
            <h2>{movie.title}</h2>
            <p>{movie.description}</p>
            <p><strong>Duração:</strong> {movie.duration}</p>
            <button onClick={onSelect}>Selecionar</button>
            <button onClick={onBack}>Voltar</button>
        </div>
    );
};

export default MovieDetail;
