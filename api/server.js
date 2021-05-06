const express = require("express");

const server = express();

server.use(express.json());

//SANITY CHECK ENDPOINT
server.get("/", (req, res, next)=>{
    res.json({message: "API Up"});
});

module.exports = server;