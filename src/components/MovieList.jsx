
import { useState, useEffect } from 'react';


const moviesList = [
{ title: 'Inception', genre: 'Fantascienza' },
{ title: 'Il Padrino', genre: 'Thriller' },
{ title: 'Titanic', genre: 'Romantico' },
{ title: 'Batman', genre: 'Azione' },
{ title: 'Interstellar', genre: 'Fantascienza' },
{ title: 'Pulp Fiction', genre: 'Thriller' },
]

const MovieList = () => {

const [filteredMovies, setFilteredMovies] = useState(moviesList);
const [genre, setGenre] = useState('');

useEffect(() => {
  const filtered = genre ? moviesList.filter(movie => movie.genre === genre) : [...moviesList];
   
  setFilteredMovies(filtered);
}, [genre]);

  return (
    <div className='col-12 ms-5'>
      <select onChange={(e) => setGenre(e.target.value)}>
        <option value="">seleziona genere</option>
        <option value="Fantascienza">Fantascienza</option>
        <option value="Thriller">Thriller</option>
        <option value="Romantico">Romantico</option>
        <option value="Azione">Azione</option>
      </select>
      <ul className='mt-3'>
        {filteredMovies.map((movie, id) =>(
          <li key={id}>{movie.title}</li>
        ))}
      </ul>
    </div>
    
  );
};

export default MovieList
