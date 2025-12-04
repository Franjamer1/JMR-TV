const moviesServices = require("../services/moviesServices")

module.exports = {

    getAllMovies: async (req, res) => {
        try {
            const movies = await moviesServices.getMovies();
            // console.log('Movies to respond with:', movies);
            console.log("peliculas cargadas correctamente");
            res.status(200).json(movies);
        } catch (error) {
            res.status(500).json({ error: 'Failed to fetch movies' });
            console.log("Error al cargar las peliculas")
        }
    },

    createMovie: async (req, res) => {
        const { title, year, director, duration, genre, rate, poster } = req.body;

        const genresArray = Array.isArray(genre) ? genre : genre.split(' ').map(item => item.trim());

        const newMovie = await moviesServices.createMovie({ title, year, director, duration, genre: genresArray, rate, poster });
        res.status(201).json(newMovie);
    }

}

