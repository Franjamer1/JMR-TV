const createCard = require("./createCard");
const axios = require("axios");

function fetchData() {

    axios.get("http://localhost:3000/movies")
        .then(response => {
            response.data.forEach(movie => {
                createCard(movie);
            });
        })
        .catch(error => {
            alert(`Error al obtener los datos de la API. ${error}`);
        });
    // try {
    //     const promise = await axios.get("https://students-api.up.railway.app/movies");

    //     promise.data.forEach(movie => {
    //         createCard(movie);
    //     });

    // } catch (error) {
    //     alert(`Error al obtener los datos de la API: ${error}`)
    // }

    // console.log("hola");
};



module.exports = fetchData;