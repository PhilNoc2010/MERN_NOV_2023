const express = require("express");
const app = express();
const port = 8000;

require('dotenv').config();

const mongoose = require('mongoose');
const dbName = process.env.DB;
const username = process.env.ATLAS_USERNAME;
const pw = process.env.ATLAS_PASSWORD;
// mongodb+srv://bob:<password>@thursday-cluster.wydm5zf.mongodb.net/?retryWrites=true&w=majority

const uri = `mongodb+srv://${username}:${pw}@thursday-cluster.wydm5zf.mongodb.net/${dbName}?retryWrites=true&w=majority`;
mongoose.connect(uri)
    .then(() => console.log("🦄🦄🦄🦄 Established a connection to the database"))
    .catch(err => console.log("❌❌❌❌❌ Something went wrong when connecting to the database", err));




app.listen( port, () => console.log(`Listening on port: ${port}`) );