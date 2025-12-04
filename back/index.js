const app = require("./src/server");
const dbCon = require("./src/config/dbCon");

dbCon().then(() => {
    app.listen(3000, () => {
        console.log("servidor escuchando en el puerto 3000");
    });
}).catch(err => {
    console.error("Error al conectar la base de datos:", err);
});
