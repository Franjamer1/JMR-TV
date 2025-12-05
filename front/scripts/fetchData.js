const createCard = require("./createCard");
const axios = require("axios");

function fetchData() {

    axios.get("jmr-tv-production.up.railway.app/movies")
        .then(response => {
            response.data.forEach(movie => {
                createCard(movie);
            });
        })
        .catch(error => {
            alert(`Error al obtener los datos de la API. ${error}`);
        });
};



module.exports = fetchData;