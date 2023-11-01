const express = require("express");
const app = express();
const port = 8000;

// === MIDDLEWARE ===
app.use(express.json(), express.urlencoded({ extended: true }));

// ROUTES
require("./routes/routes")(app);


// this needs to be below the other code blocks
app.listen(port, () => console.log(`Listening on port: ${port}`));