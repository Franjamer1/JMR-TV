require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    //realizo la conexion con la BDD
    await mongoose.connect("mongodb+srv://franjamer1:Gallinadonavidad1@henrym2.r9qg6og.mongodb.net/HenryM2?retryWrites=true&w=majority&appName=HenryM2");
    console.log("Conexion a la base de datos exitosa");
    // console.log(process.env.MONGO_URI);
}

module.exports = dbCon;

