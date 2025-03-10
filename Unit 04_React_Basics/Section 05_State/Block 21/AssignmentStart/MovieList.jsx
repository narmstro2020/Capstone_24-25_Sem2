import { useState } from 'react';

const MovieList = () => {
    const [movies, setMovies] = useState([]);
    const [movie, setMovie] = useState('');

    function addMovie() {
        // TODO: call setMovies adding in the appropriate hint hint array
        // TODO: call setMovie passing in ""
    }

    return (
        <>
            <input value={movie} onChange={e => setMovie(e.target.value)} />
            <button onClick={addMovie}>Add Movie</button>
            <ul>
                {movies.map((m, index) => <li key={index}>{m}</li>)}
            </ul>
        </>
    )

}

export default MovieList;