const express = require("express");
const connectDB = require("./config/db");
const dotenv = require("dotenv").config();

const port = 5000;

// connexion à la DB
connectDB();

const app = express();

// Middleware qui premet de traiter les données de la Request
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// l'import des routes sur le serveur
app.use("/post", require("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => console.log("listening on port " + port));
