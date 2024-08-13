import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { id: 1, title: 'Inception', watched: false },
        { id: 2, title: 'The Dark Knight', watched: false },
        { id: 3, title: 'Interstellar', watched: false },
    ]);

    const [showWatched, setShowWatched] = useState(false);

    // added for movie removal
    const removeMovie = (id) => {
        setMovies(movies.filter(movie => movie.id !== id));
    };

    const toggleWatched = (id) => {
        setMovies(movies.map(movie => 
            movie.id === id ? { ...movie, watched: !movie.watched } : movie
        ));
    };

    // added for toggleview
    const toggleView = () => {
        setShowWatched(!showWatched);
    };

    const filteredMovies = showWatched 
        ? movies.filter(movie => movie.watched) 
        : movies;

    return (
        <div>
            <h2>Movies List</h2>
            <button onClick={toggleView}>
                {showWatched ? 'Show All Movies' : 'Show Watched Movies'}
            </button>
            <ul>
                {filteredMovies.map(movie => (
                    <li key={movie.id}>
                        {movie.title} 
                        <button onClick={() => toggleWatched(movie.id)}>
                            {movie.watched ? 'Unwatch' : 'Watch'}
                        </button>
                        <button onClick={() => removeMovie(movie.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;
