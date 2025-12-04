require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    //realizo la conexion con la BDD
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Conexion a la base de datos exitosa");
};

module.exports = dbCon;

