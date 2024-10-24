const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

app.use(cors()); // Enable CORS

const movies = [
  {
    id: 1,
    title: 'The Matrix',
    year: 1999,
    genre: 'Action',
    description: 'A computer hacker learns from mysterious rebels about the true nature of his reality and his role in the war against its controllers.'
  },
  {
    id: 2,
    title: 'Inception',
    year: 2010,
    genre: 'Sci-Fi',
    description: 'A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a CEO.'
  },
  {
    id: 3,
    title: 'Interstellar',
    year: 2014,
    genre: 'Adventure',
    description: 'A team of explorers travel through a wormhole in space in an attempt to ensure humanity\'s survival.'
  }
];

app.get('/api/movies', (req, res) => {
  res.json(movies);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
