// Define all routes of the api
module.exports = app => {
    const resssource = require("./game.controller");
    var router = require("express").Router();
    // Get all games
    // router.get("/", games.findAll);
    // Get one game
    router.get("/:name", ressource.findOne);
    // Get values of one game
    // router.get("/:name/values", games.getValues);


    app.use('/ressource', router);
}
////////////////////////////////////////////////////////////////////////////
// GET all items
app.get('/items', (req, res) => {
    const items = JSON.parse(fs.readFileSync('data.json'));
    res.json(items);
});

// GET item by id
app.get('/items/:id', (req, res) => {
    const items = JSON.parse(fs.readFileSync('data.json'));
    const item = items.find(i => i.id == req.params.id);
    if (item) {
        res.json(item);
    } else {
        res.status(404).send('Item not found');
    }
});

// POST new item
app.post('/items', (req, res) => {
    const items = JSON.parse(fs.readFileSync('data.json'));
    const newItem = req.body;
    newItem.id = Date.now().toString();
    items.push(newItem);
    fs.writeFileSync('data.json', JSON.stringify(items));
    res.json(newItem);
});

// PUT update item by id
app.put('/items/:id', (req, res) => {
    const items = JSON.parse(fs.readFileSync('data.json'));
    const index = items.findIndex(i => i.id == req.params.id);
    if (index !== -1) {
        items[index] = req.body;
        items[index].id = req.params.id;
        fs.writeFileSync('data.json', JSON.stringify(items));
        res.json(items[index]);
    } else {
        res.status(404).send('Item not found');
    }
});

// DELETE item by id
app.delete('/items/:id', (req, res) => {
    const items = JSON.parse(fs.readFileSync('data.json'));
    const index = items.findIndex(i => i.id == req.params.id);
    if (index !== -1) {
        const deletedItem = items.splice(index, 1);
        fs.writeFileSync('data.json', JSON.stringify(items));
        res.json(deletedItem[0]);
    } else {
        res.status(404).send('Item not found');
    }
});
