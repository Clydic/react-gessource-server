const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
const fs = require('fs');
config();
const PORT = 4000 //parseInt(process.env.PORT) || 3000;
const JSON_FILE = process.env.JSON_FILE;


app.use(cors());
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
require("./game.routes")(app);
app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT
	)
});
