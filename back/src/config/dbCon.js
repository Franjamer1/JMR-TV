require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a MongoDB exitosa");
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error);
        throw error;
    }
};

module.exports = dbCon;

