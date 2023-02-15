/*Define request the api will use*/
const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
const fs = require('fs');
config();
const JSON_FILE = process.env.JSON_FILE;


// Find One game
exports.findOne = (req, res) => {
    let name = (req.params.name);
    let json_content = fs.readFileSync(JSON_FILE);
    let json = JSON.parse(json_content);
    let game_value = json.games.filter((e) => e.name == name)
    res.send(game_value[0]);

}
import React, { useState } from "react";

const InputWithLabel = () => {
    const [label, setLabel] = useState(0);
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddition = () => {
        setLabel(parseInt(label) + parseInt(inputValue));
        setInputValue("");
    };

    return (
        <div className="input-with-label">
            <div className="label">{label}</div>
            <input value={inputValue} onChange={handleInputChange} />
            <button onClick={handleAddition}>Add</button>
        </div>
    );
};

export default InputWithLabel;


const bodyParser = require("body-parser");
const fs = require("fs");

app.use(bodyParser.json());

// Lecture du fichier JSON
let data = fs.readFileSync("data.json");
let dataJSON = JSON.parse(data);

// Route pour soumettre le formulaire
app.post("/updateData", (req, res) => {
    // Récupération des données du formulaire
    const formData = req.body;

    // Mise à jour des données du fichier JSON
    dataJSON.push(formData);

    // Ecriture des données mises à jour dans le fichier JSON
    fs.writeFileSync("data.json", JSON.stringify(dataJSON));

    res.send("Données mises à jour avec succès");
});
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
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Serveur en écoute sur le port ${port}`);
});
