
module.exports = app => {
    const ressources = require('../controllers/ressource.controller.js');
    var router = require("express").Router();
    let params = '';
    // Get all ressources
    router.get("/:game/values", ressources.findAll);
    router.get("/:game/:ressource", ressources.findOne);
    router.put("/:game/:ressource", ressources.update);
    router.post("/:game/", ressources.create);
    router.delete("/:game/:ressource", ressources.delete);


    app.use('/games', router);
}