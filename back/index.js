const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(() => {
    const PORT = process.env.PORT || 3000;
    app.listen(PORT, () => {
        console.log(`servidor escuchando en el puerto ${PORT}`);
    });
}).catch(err => {
    console.error("Error al conectar la base de datos:", err);
});
