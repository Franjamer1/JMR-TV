// const axios = require("axios");
const Movie = require("../models/Movies");
const movies = require("../models/Movies")

module.exports = {
    // getMovies: () => {
    //     return axios.get('https://students-api.up.railway.app/movies')
    //         .then(response => {
    //             // console.log('Fetched movies:', response.data);
    //             return response.data;
    //         })
    //         .catch(error => {
    //             return `Error fetching movies. ${error}`;
    //         });
    // }
    getMovies: async () => {
        // const response = await axios.get('https://students-api.up.railway.app/movies');
        // console.log('Fetched movies:', response.data);
        // return response.data;
        const getMovies = await movies.find();
        return getMovies;
    },

    //HW11
    createMovie: async (movie) => {
        // console.log(movie);
        const newMovie = await Movie.create(movie);

        console.log('Movie created:', newMovie.title);
        return newMovie;
    }
}