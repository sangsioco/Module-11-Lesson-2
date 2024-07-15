import React, { useState } from 'react';

const MoviesList = () => {
    const [movies, setMovies] = useState([
        { title: 'Inception', genre: 'Action', description: 'A mind-bending thriller.' },
        { title: 'The Matrix', genre: 'Action', description: 'A cyberpunk classic.' },
        { title: 'The Godfather', genre: 'Drama', description: 'A crime saga.' },
    ]);

    const [detailsVisible, setDetailsVisible] = useState(null);

    const toggleDetails = (index) => {
        setDetailsVisible(detailsVisible === index ? null : index);
    };

    return (
        <div>
            <ul>
                {movies.map((movie, index) => (
                    <li key={index} onClick={() => toggleDetails(index)}>
                        {movie.title}
                        {detailsVisible === index && <p>{movie.description}</p>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default MoviesList;