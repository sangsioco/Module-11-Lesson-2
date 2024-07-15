import React from 'react';
import UserProfile from './components/user';
import MoviesList from './components/movielist';

const App = () => {
    return (
        <div>
            <UserProfile />
            <MoviesList />
        </div>
    );
};

export default App;