const swaggerJsdoc = require('swagger-jsdoc');
const express = require('express');
const app = express();
const cors = require('cors');
const { config } = require('dotenv');
config();
const PORT = process.env.PORT || 3000;
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./doc-api.json");
app.use(cors());
const bodyParser = require("body-parser");
const jsonParser = bodyParser.json();
app.use(jsonParser);
//create a swagger (Documentation)
require("./routes/game.routes")(app);
require("./routes/ressource.routes")(app);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(PORT, () => {
	console.log('Server is running on port ' + PORT
	)
});

// Ce commentaire me permet de faire un test
// Je continue mes test lié aux issues