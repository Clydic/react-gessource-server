// Define all routes of the api
module.exports = app => {
    const games = require("../controllers/game.controller");
    var router = require("express").Router();
    // Get all games
    router.get("/", games.findAll);
    router.post("/", games.create);
    // Get one game
    router.get("/:name", games.findOne);
    router.put("/:name", games.update);
    router.delete("/:name", games.delete);


    app.use('/games', router);
}
