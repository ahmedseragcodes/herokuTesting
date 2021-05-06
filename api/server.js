const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const CharactersRouter = require("./characters-router");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/characters", CharactersRouter);

//SANITY CHECK ENDPOINT
server.get("/", (req, res, next)=>{
    res.json({message: "API Up"});
});

module.exports = server;