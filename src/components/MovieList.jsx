import React from 'react';

const MovieList = ({ movies, setSelectedMovie }) => {
    return (
        <div className='movie-list'>
            {movies.map((movie) => (
                <div
                    key={movie.id}
                    onClick={() => setSelectedMovie(movie)}
                    className='movie-item'
                >
                    <img src={movie.cover} alt={movie.title} />
                    <h3>{movie.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default MovieList;
