const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
config();
const PORT = process.env.PORT || 3000;
// const PORT = 4000 //parseInt(process.env.PORT) || 3000;


app.use(cors());
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
require("./routes/game.routes")(app);
require("./routes/ressource.routes")(app);
app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT
	)
});
