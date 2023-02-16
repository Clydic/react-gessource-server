/*Define request the api will use*/
const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
const fs = require('fs');
const JSON_FILE = process.env.JSON_FILE;
config();
// Find All games
exports.findAll = (req, res) => {
	let json_content = fs.readFileSync(JSON_FILE);
	let json = JSON.parse(json_content);
	res.send(json.games);
}

// Find One game
exports.findOne = (req, res) => {
	let name = (req.params.name);
	let json_content = fs.readFileSync(JSON_FILE);
	let json = JSON.parse(json_content);
	let game_value = json.games.filter((e) => e.name == name)
	res.send(game_value[0]);


}

exports.delete = (req, res) => {
	const items = JSON.parse(fs.readFileSync(JSON_FILE));
	const games = items.games;
	console.log(games);
	const index = games.findIndex(i => i.name == req.params.name);
	if (index !== -1) {
		console.log(games);
		const deletedItem = games.splice(index, 1);
		console.log(games);
		items.games = games;
		fs.writeFileSync(JSON_FILE, JSON.stringify(items));
		res.json(items);
	} else {
		res.status(404).send('Partie non trouvé');
	}
}

exports.create = (req, res) => {
	const items = JSON.parse(fs.readFileSync(JSON_FILE));
	const games = items.games
	console.log(items);
	const newItem = req.body;
	games.push(newItem);
	items.games = games;
	fs.writeFileSync(JSON_FILE, JSON.stringify(items));
	res.json(items);
}

exports.update = (req, res) => {
	{
		const list_objec = JSON.parse(fs.readFileSync(JSON_FILE));
		const games = list_objec.games;
		console.log(list_objec);
		const index = games.findIndex(i => i.game == req.params.game);

		games[index].name = req.body.name;
		list_objec.games = games;
		// fs.writeFileSync(JSON_FILE, JSON.stringify(list_objec));
		res.send(list_objec);


	}
}