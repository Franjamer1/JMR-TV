require("dotenv").config();
const mongoose = require("mongoose");

const dbCon = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("Conexión a MongoDB exitosa");
        console.log("MONGO_URI desde Railway:", process.env.MONGO_URI);
    } catch (error) {
        console.error("Error al conectar con MongoDB:", error);
        throw error;
    }
};

module.exports = dbCon;

