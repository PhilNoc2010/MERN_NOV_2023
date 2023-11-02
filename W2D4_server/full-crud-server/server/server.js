const express = require("express");
const app = express();
require('dotenv').config();
const port = process.env.PORT;

require("./config/mongoose.config");

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyMovieRoutes = require("./routes/movie.routes");
AllMyMovieRoutes(app);

app.listen(port, () => console.log(`🌴🌴🌴🌴 Listening on port: ${port}`));