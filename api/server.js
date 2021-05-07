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

//SANITY CHECK ENDPOINT
// server.get("/", (req, res, next)=>{
//     res.json({message: "API Up"});
// });

server.use("*", (req, res)=>{
    res.sendFile(path.join(__dirname, "../client/build", "build/index.html"));
});

module.exports = server;