const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const CharactersRouter = require("./characters-router");
const path = require("path");

const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use("/api/characters", CharactersRouter);
server.use(express.static(path.join(__dirname, "client/build")));

//SANITY CHECK ENDPOINT
server.get("/", (req, res, next)=>{
    res.json({message: "API Up"});
});

server.use("*", (req, res)=>{
    res.sendfile(path.join(__dirname, "client/build", "index.html"));
})

module.exports = server;