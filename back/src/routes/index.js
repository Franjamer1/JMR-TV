const { Router } = require("express");
const moviesRouter = require("./moviesRouter");

//instancia del enrutador
const router = Router();

router.use("/movies", moviesRouter);

module.exports = router;