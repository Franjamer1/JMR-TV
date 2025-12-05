// const axios = require("axios");
const Movie = require("../models/Movies");
const movies = require("../models/Movies")

module.exports = {

    getMovies: async () => {
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