import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from backend
  useEffect(() => {
    fetch('http://localhost:3000/api/movies')
      .then((response) => response.json())
      .then((data) => setMovies(data))
      .catch((error) => console.error('Error fetching movies:', error));
  }, []);

  return (
    <div className="App">
      <header>
        <h1>🎬 Movie List</h1>
      </header>

      <div className="movie-list">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-card">
            <h2>{movie.title}</h2>
            <p><strong>Year:</strong> {movie.year}</p>
            <p><strong>Genre:</strong> {movie.genre}</p>
            <button onClick={() => setSelectedMovie(movie)} className="details-button">
              View Details
            </button>
          </div>
        ))}
      </div>

      {selectedMovie && (
        <div className="movie-details-modal">
          <div className="movie-details-content">
            <h2>{selectedMovie.title}</h2>
            <p><strong>Year:</strong> {selectedMovie.year}</p>
            <p><strong>Genre:</strong> {selectedMovie.genre}</p>
            <p><strong>Description:</strong> {selectedMovie.description}</p>
            <button onClick={() => setSelectedMovie(null)} className="close-button">
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
